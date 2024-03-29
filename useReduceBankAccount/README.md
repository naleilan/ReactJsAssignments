# useReduceBankAccount

- This code implements a simple React application using the useReducer hook to manage the state of a bank account. The bank account has different actions that can be performed, and the state transitions are handled by the reducer function.

Here are the main features of the code:

### Initial State:

The initial state of the bank account includes the balance (initially set to 0), loan amount (initially set to 0), and a boolean isActive to indicate whether the account is active or not (initially set to false).

### Actions:

The available actions are defined in the ACTIONS object, which includes:
OPEN_ACC,
DEPOSIT,
WITHDRAW,
REQUEST_LOAN,
PAYlOAN,
CLOSE_ACC.

### Reducer Function:

- If the account is not active (isActive is false) and the action is not to open an account, it returns the current state.
- It then checks the action type and performs the corresponding state transitions based on the rules mentioned in the comments.

### Button Actions:

- Opening an account sets the balance to 500 and isActive to true.
- Depositing and withdrawing money updates the balance accordingly.
- Requesting a loan adds the requested amount to the balance and sets the loan amount (if no loan exists).
- Paying a loan deducts the loan amount from the balance (if sufficient balance is available) and sets the loan amount to 0.
- Closing the account is allowed only if there is no outstanding loan and the balance is zero. If conditions are met, it resets the state to the initial state.
