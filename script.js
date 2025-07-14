const today = new Date();

window.addEventListener("DOMContentLoaded", () => {
    const todayDateSection = document.getElementById('presentDate');
    todayDateSection.value = today.toISOString().split('T')[0];
});

document.getElementById('calculate').addEventListener('click', () => {
    const birthdateSection = document.getElementById('birthDate').value;
    const persentDateSection = document.getElementById('presentDate').value;
    const resultSection = document.getElementById('resultSection');

    if (!birthdateSection) {
        resultSection.innerHTML = `<p>Please select your birthdate.</p>`;
        return;
    }

    const birthdate = new Date(birthdateSection);
    const presentDate = new Date(persentDateSection);

    let age = presentDate.getFullYear() - birthdate.getFullYear();

    let monthDiff = presentDate.getMonth() - birthdate.getMonth();
    let dayDiff = presentDate.getDate() - birthdate.getDate();
    
    if (monthDiff === 0 && dayDiff === 0) {
        resultSection.innerHTML = `<p>Your age: </p> <p>Exactly ${age} years. Happy Birthday!!! </p>`;
        return;
    }
    
    if (monthDiff > 0 ) {
        if (dayDiff < 0) {
            monthDiff += 12;
            resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff - 1} months ${31 + dayDiff} days.</p>`;
            return;
        } else if (dayDiff >= 0) {
            resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff} months ${dayDiff} days.</p>`;
            return;
        }
    } else if (monthDiff < 0) {
        age--;
        monthDiff += 12;
        if (dayDiff < 0) {
            resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff - 1} months ${31 + dayDiff} days.</p>`;
            return;
        } else if (dayDiff >= 0) {
            resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff} months ${dayDiff} days.</p>`;
            return;
        }
    } else if (monthDiff === 0) {
        if (dayDiff < 0) {
            resultSection.innerHTML = `<p>Your age: </p> <p>${age - 1} years 11 months ${31 + dayDiff} days.</p>`;
            return;
        } else if (dayDiff > 0) {
            resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff} months ${dayDiff} days.</p>`;
            return;
        }
    }

    if (age < 0) {
        resultSection.innerHTML = `You cannot be born in the future! Please select a valid birthdate.`;
        return;
    }

    resultSection.innerHTML = `<p>Your age: </p> <p>${age} years ${monthDiff} months ${dayDiff} days.</p>`;
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