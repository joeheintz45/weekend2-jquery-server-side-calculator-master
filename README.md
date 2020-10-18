# Weekend 2 Server Calculator

## Description

I made a simple calculator that takes two numbers as inputs and then the user selects a math operator for the numbers to be calculated. Once the equals button is hit, the data is sent to the server to be calculated and sent back to display the answer and add to the history of equations. To solve this, I started by writing out my server code. I wrote a post, a get, and a function that checked and operator string and then did the appropriate math for the operator. I tested the routes and the data being sent with Postman. After I got the routes and the data working I started working on the client side. I started by making a rough HTML page with some inputs, buttons of the operators and the equals and clear, and setup an unordered list for appending the history. With that setup, I began writing the client JS and made an object that held the inputs for the number values and the operator buttons. Once the data was store in an object I made an ajax post request and sent those values to be sent through the server side calculator function. I then made an ajax get request that brought back the value of the result of the function. I then made a render function that displayed the total of the equation and a history of all prior calculations. To finish I added some CSS to make it more obvious which operator was actively selected.

## Usage

1. User inputs the values into the input fields
2. User selects a math operator
3. User hits equals button and the server runs the calculation and returns the value of the equation on screen
4. User hits C button o clear input fields

## Built With

Built with HTML, CSS, JavaScript, jQuery, and NodeJS.

## Acknowledgement

Thank you to Prime Digital Academy for supplying the knowledge required to build this application.
