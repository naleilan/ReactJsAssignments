# React + Vite

This is a simple React application that calculates the total amount to be paid, including a tip, based on the bill amount and the service quality selected by the user for both themselves and their friend. Let's break down the components and their functionality:

1. App Component:

Renders the TipCalc component.

2. TipCalc Component:

Manages the state for the bill amount (bill), service quality for the user (service1), and service quality for the friend (service2).
Calculates the tip based on the formula: (bill \* (service1 + service2)) / 200.
Provides input fields for the user to enter the bill amount and select service quality for both themselves and their friend.
Renders the Bill, Service (twice), Output, and Reset components.
Conditionally renders the Output and Reset components only when the bill amount is greater than 0.

3.Bill Component:

Accepts bill and onBill as props.
Renders an input field for the user to enter the bill amount.

4.Service Component:

Accepts person, service, and onSelect as props.
Renders a dropdown (select) for the user to select the service quality.

5.Output Component:

Accepts bill, onBill, and tip as props.
Displays the calculated total amount to be paid, including the bill amount and the tip.

6.Reset Component:

Accepts onReset as a prop.
Renders a button that, when clicked, resets the bill amount and service quality for both the user and their friend.

- Overall, the application provides a simple interface for users to input a bill amount and rate the service quality. It then calculates the total amount to be paid, including a tip, and displays the result. Users can also reset the input values using the "Reset" button.
