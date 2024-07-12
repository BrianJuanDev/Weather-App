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
    const apiId = 'dceaafd03be6ed650355f0d0f2d6d902';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(dataJson => {
            if (dataJson.cod === '404') {
                showError('Ciudad no encontrada');
            } else {
                clearHTML();
                showWeather();
            }
            // console.log(dataJson);
        }) 
        .catch(error => {
            console.log(error);
        });
}

function showWeather(data) {
    const { name, main: {temp, temp_min, temp_max}, weather: [arr] } = data; 

    const degrees = kelvinToCentigrades(temp);
    const max = kelvinToCentigrades(temp_max);
    const min = kelvinToCentigrades(temp_min);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
        <h2>${degrees}°C</h2>
        <p>Min: ${min}°C</p>
        <p>Max: ${max}°C</p>
    `;
    result.appendChild(content);
    return;
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

function clearHTML() {
    result.innerHTML = '';
    return;
}

function kelvinToCentigrades(temp) {
    return parseInt(temp - 273.15);
}