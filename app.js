// write code here
let input = prompt("Enter the number:");

if (input === "") alert("Invalid, Please enter the input number");
else if (isNaN(+input)) alert("Invalid, The recived input is not number");
else if (+input > 0) alert("Positive number");
else if (+input === 0) alert("Zero");
else if (+input < 0) alert("Negative number");
else alert("Invalid number");

// Note: The isNaN() function determines whether a value is NaN