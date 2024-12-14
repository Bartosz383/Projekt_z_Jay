const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

// Twój klucz API
const kluczAPI = "617f1674c75eb7058425b911e7591ae2";

// Nasłuchiwanie formularza
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim().toLowerCase();
    if (city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${kluczAPI}&units=metric&lang=pl`
            );

            if (!response.ok) {
                throw new Error("Nie znaleziono miasta");
            }

            const data = await response.json();
            weatherResult.innerHTML = `
                <p>W <strong>${data.name}</strong> temperatura wynosi od <strong>${data.main.temp_min}</strong> do <strong>${data.main.temp_max}</strong> °C.</p>
                <p>Wiatr wieje z prędkością <strong>${data.wind.speed}</strong> m/s. Chmury pokrywają <strong>${data.clouds.all}%</strong> nieba, a wilgotność wynosi <strong>${data.main.humidity}%</strong>.</p>
            `;
        } catch (error) {
            weatherResult.innerHTML = `<p class='error'>${error.message}</p>`;
        }
    }
});
