// Get references to DOM elements
const number = document.getElementById('number');       // Input field for the number
const convertBtn = document.getElementById('convert-btn'); // Button that triggers the conversion
const output = document.getElementById('output');       // Element to display the result

// Roman numeral conversion table from largest to smallest
const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

// Function to handle the result output
function outputResult(number) {
    // If input is empty or not a number
    if (number === "" || isNaN(number)) {
        output.textContent = "Please enter a valid number";
        return;
    }

    // Convert input string to integer
    number = parseInt(number);

    // Check if number is too low
    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    // Check if number is too high
    else if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    // Begin conversion
    let result = '';

    // Loop through the romanNumerals array
    for (const { value, symbol } of romanNumerals) {
        // While the number is greater than or equal to the current value
        while (number >= value) {
            result += symbol;  // Append the Roman symbol
            number -= value;   // Subtract the value from the number
        }
    }

    // Output the final Roman numeral result
    output.textContent = result;
}

// Add click event listener to the button
convertBtn.addEventListener('click', () => {
    // Call the outputResult function with the current value of the input
    outputResult(number.value);
});
