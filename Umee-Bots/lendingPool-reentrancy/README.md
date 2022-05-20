# Detect Reentrancy In Lending Pool

## Description

Detects reentrancy inside LendingProtocol smart contract. If the call is a reentrant call function inside the `FUNCTIONS_SELECTORS` array.

## Supported Chains

- Ethereum

## Alerts

- UMEE-9
  - Fired when in a transaction occur multiple nested calls to the same contract (reentrancy)
  - Severity is always set to "High."
  - Type is always set to "Exploit."
  - Metadata contains:
    - initialCallSelector: The selector of the function that calls the `LendingPool` smart contract
    - lendingPoolCallSelector: The selector of the first reentrancy case on the `LendingPool` smart contract