// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4cee11a3a7e82d9fb8aae679f6c88b21";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
    
}

//Weather info display
function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.innerHTML = getWeatherEmoji(id);  // Use innerHTML to parse HTML

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);   
   
}

//Weather emojis with colors
function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300): // Thunderstorm
            return '<i class="fas fa-bolt" style="color: darkslateblue;"></i>';
        case (weatherId >= 300 && weatherId < 400): // Drizzle
            return '<i class="fas fa-cloud-rain" style="color: lightsteelblue;"></i>';
    
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
