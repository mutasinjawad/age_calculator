let today = new Date();

window.addEventListener("DOMContentLoaded", () => {
    const todayDateSection = document.getElementById('presentDate');
    todayDateSection.value = today.toISOString().split('T')[0];
});

document.getElementById('calculate').addEventListener('click', () => {
    const birthdateSection = document.getElementById('birthDate').value;
    const resultSection = document.getElementById('resultSection');

    if (!birthdateSection) {
        resultSection.innerHTML = `<p>Please select your birthdate.</p>`;
        return;
    }

    const birthdate = new Date(birthdateSection);

    let age = today.getFullYear() - birthdate.getFullYear();

    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0) {
        resultSection.innerHTML = `You cannot be born in the future! Please select a valid birthdate.`;
        return;
    }

    resultSection.innerHTML = `<p>Your age: </p> <p>${age} years.</p>`;
});

flatpickr("#presentDate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    disableMobile: true
});
flatpickr("#birthDate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    disableMobile: true
});