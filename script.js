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
        return;
    }

    callApi(nameCity.value, nameCountry.value);
})

function callApi(city, country) {
    const apiId = '';
    const url = '';

    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(dataJson => {
            if (dataJson.cod === '404') {
                showError('Ciudad no encontrada');
            } else {
                showWeather();
            }
            console.log(dataJson)
        }
    )
}

function showError(message) {
    // console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML(message)

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}