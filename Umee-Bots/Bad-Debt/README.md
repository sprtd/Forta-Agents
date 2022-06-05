# Detect Bad Debt Bot

## Description

This bot monitors detect when the user's borrow value is more than his collateral values. The agent behavior can customize in `src/agent.config.ts`.

## Supported Chains

- Ethereum

## Alerts

- UMEE-11
  - Fired when the borrowed value becomes greater than the collateral value.
  - Severity is always set to "Hight"
  - Type is always set to "Exploit"
  - Metadata contains:

## Test Data

### Kovan Testnet (PoC)

The following test was generated by interacting with PoC contracts (available at the `PoC/` directory) deployed on the Kovan testnet.

To check the results, uncomment the lines indicated in `src/agent.config.ts,` set a Kovan testnet RPC (e.g. `https://kovan.poa.network`) as `jsonRpcUrl` in your `forta.config.json` file and run:

```
npm run block
```

In the block `32000017`, When user call borrow from `MockLendingPool.borrow()` the `MockLendingPool.getUserAccountData()` will return collaterals value less than the borrow amount.