// script.js
document.getElementById('calculate').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthDate').value;
    const result = document.getElementById('result');

    if (!birthdateInput) {
        result.textContent = "Please select your birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();

    // Adjust age if birthday hasn't happened yet this year
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0) {
        result.textContent = "Birthdate cannot be in the future!";
        return;
    }

    result.textContent = `Your age is ${age} years.`;
});