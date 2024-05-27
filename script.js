document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the value from the text inputs
    const name = document.getElementById('name').value;

    // Get the value from the select dropdown
    const selectedOption = document.getElementById('options').value;

    // Get the value from the date input
    const selectedDate = document.getElementById('date').value;

    // Get the value from the radio buttons
    const radioOptions = document.getElementsByName('radioOption');
    let selectedRadioOption;
    for (const radio of radioOptions) {
        if (radio.checked) {
            selectedRadioOption = radio.value;
            break;
        }
    }

    // Create the message to display in the alert
    const alertMessage = `Name: ${name}\nSelected Option: ${selectedOption}\nSelected Date: ${selectedDate}\nSelected Radio Option: ${selectedRadioOption}`;

    // Display the alert with the selected values
    alert(alertMessage);

    // Optionally, you can still display the values in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Name: ${name}</p>
                           <p>Selected Option: ${selectedOption}</p>
                           <p>Selected Date: ${selectedDate}</p>
                           <p>Selected Radio Option: ${selectedRadioOption}</p>`;
});
