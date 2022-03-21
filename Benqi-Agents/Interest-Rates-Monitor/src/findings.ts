import { Finding, FindingSeverity, FindingType } from "forta-agent";
import { BigNumber } from "ethers";

export const findingCase: string[] = ["lowerBorrow", "upperBorrow", "lowerSupply", "upperSupply"];

export const createFinding = (
  qiTokenName: string,
  qiTokenAddress: string,
  interestRate: BigNumber,
  rateThreshold: BigNumber,
  findingCase: string
) => {
  switch (findingCase) {
    case "lowerBorrow":
      return Finding.fromObject({
        name: "Βorrow rate below threshold drop",
        description: `${qiTokenName} token's borrow interest rate dropped below lower threshold`,
        alertId: "BENQI-6-1",
        type: FindingType.Suspicious,
        severity: FindingSeverity.Medium,
        protocol: "BenQi",
        metadata: {
          token: qiTokenName,
          tokenAddress: qiTokenAddress.toLowerCase(),
          borrowInterestRate: interestRate.toString(),
          lowerRateThreshold: rateThreshold.toString(),
          thresholdExceededBy: `${((interestRate.toNumber() - rateThreshold.toNumber()) / rateThreshold.toNumber())
            .toFixed(2)
            .toString()}%`,
        },
      });
    case "upperBorrow":
      return Finding.fromObject({
        name: "Borrow rate upper threshold excess",
        description: `${qiTokenName} token's borrow interest rate exceeded upper threshold`,
        alertId: "BENQI-6-2",
        type: FindingType.Suspicious,
        severity: FindingSeverity.Medium,
        protocol: "BenQi",
        metadata: {
          token: qiTokenName,
          tokenAddress: qiTokenAddress.toLowerCase(),
          borrowInterestRate: interestRate.toString(),
          upperRateThreshold: rateThreshold.toString(),
          thresholdExceededBy: `${((interestRate.toNumber() - rateThreshold.toNumber()) / rateThreshold.toNumber())
            .toFixed(2)
            .toString()}%`,
        },
      });
    case "lowerSupply":
      return Finding.fromObject({
        name: "Supply rate below threshold drop",
        description: `${qiTokenName} token's supply interest rate dropped below lower threshold`,
        alertId: "BENQI-6-3",
        type: FindingType.Suspicious,
        severity: FindingSeverity.Medium,
        protocol: "BenQi",
        metadata: {
          token: qiTokenName,
          tokenAddress: qiTokenAddress.toLowerCase(),
          supplyInterestRate: interestRate.toString(),
          lowerRateThreshold: rateThreshold.toString(),
          thresholdExceededBy: `${((interestRate.toNumber() - rateThreshold.toNumber()) / rateThreshold.toNumber())
            .toFixed(2)
            .toString()}%`,
        },
      });
    default:
      return Finding.fromObject({
        name: "Supply rate upper threshold excess",
        description: `${qiTokenName} token's supply interest rate exceeded upper threshold`,
        alertId: "BENQI-6-4",
        type: FindingType.Suspicious,
        severity: FindingSeverity.Medium,
        protocol: "BenQi",
        metadata: {
          token: qiTokenName,
          tokenAddress: qiTokenAddress.toLowerCase(),
          supplyInterestRate: interestRate.toString(),
          upperRateThreshold: rateThreshold.toString(),
          thresholdExceededBy: `${((interestRate.toNumber() - rateThreshold.toNumber()) / rateThreshold.toNumber())
            .toFixed(2)
            .toString()}%`,
        },
      });
  }
};
