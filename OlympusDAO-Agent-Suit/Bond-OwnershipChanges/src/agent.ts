import { Finding, HandleTransaction, TransactionEvent } from 'forta-agent';
import { BONDs, ABIs, createFinding } from './utils';

const provideHandleTransaction =
  (_bonds: string[]): HandleTransaction =>
  async (txEvent: TransactionEvent): Promise<Finding[]> => {
    const promises = _bonds
      .map((bond) => txEvent.filterLog(ABIs, bond).map(createFinding))
      .flat();

    const findings = await Promise.all(promises);

    return findings;
  };

export default {
  handleTransaction: provideHandleTransaction(BONDs),
};
