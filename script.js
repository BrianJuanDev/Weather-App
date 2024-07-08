const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameCity.value);
    console.log(nameCountry.value);

    if (nameCity.value === '' || nameCountry.value === '') {
        showError('Ambos campos son obligatorios');
    }
})

function showError(message) {
    // console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML(message)

    form.appendChild(alert);
}