// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4cee11a3a7e82d9fb8aae679f6c88b21";
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closeBtn = document.querySelector(".close");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        showLoading();
        try {
            const weatherData = await getWeatherData(city);
            hideLoading();
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            hideLoading();
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

document.getElementById("howToUse").addEventListener("click", () => {
    showPopup("To use this app, simply enter the name of a city in the input field and click 'Get Weather'. The app will display the current weather information for the specified city.");
});

document.getElementById("about").addEventListener("click", () => {
    showPopup("This app was built by Jake Boateng while studying for the Code Institute Full Stack Software Development Diploma. The app uses openweathermap.org API to generate the current weather info");
});

closeBtn.addEventListener("click", hidePopup);
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        hidePopup();
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        const { cod, message } = await response.json();
        if (cod === "404") {
            throw new Error(`City not found. Please check the city name and try again.`);
        } else {
            throw new Error(`Error ${cod}: ${message}`);
        }
    }

    return await response.json();
}

// Weather info display
function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = createDisplayElement("h1", city, "cityDisplay");
    const tempDisplay = createDisplayElement("p", `${(temp - 273.15).toFixed(1)}°C`, "tempDisplay");
    const humidityDisplay = createDisplayElement("p", `Humidity: ${humidity}%`, "humidityDisplay");
    const descDisplay = createDisplayElement("p", description, "descDisplay");
    const weatherEmoji = document.createElement("p");
    weatherEmoji.innerHTML = getWeatherEmoji(id);

    weatherEmoji.classList.add("weatherEmoji");

    card.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay, weatherEmoji);
}

// Create display element helper function
function createDisplayElement(tag, textContent, className) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    element.classList.add(className);
    return element;
}

// Weather emojis with colors
function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300): // Thunderstorm
            return '<i class="fas fa-bolt" style="color: darkslateblue;"></i>';
        case (weatherId >= 300 && weatherId < 400): // Drizzle
            return '<i class="fas fa-cloud-rain" style="color: lightsteelblue;"></i>';
        case (weatherId >= 500 && weatherId < 600): // Rain
            return '<i class="fas fa-cloud-showers-heavy" style="color: steelblue;"></i>';
        case (weatherId >= 600 && weatherId < 700): // Snow
            return '<i class="fas fa-snowflake" style="color: lightcyan;"></i>';
        case (weatherId >= 700 && weatherId < 800): // Atmosphere (fog, mist, etc.)
            return '<i class="fas fa-smog" style="color: #ffffff;"></i>';
        case (weatherId === 800): // Clear sky
            return '<i class="fas fa-sun" style="color: orange;"></i>';
        case (weatherId >= 801 && weatherId < 810): // Cloudy
            return '<i class="fas fa-cloud" style="color: #ffffff;"></i>';
        default: // Unknown weather
            return '<i class="fas fa-question" style="color: red;"></i>';
    }
}

// Display error messages
function displayError(message) {
    card.textContent = "";
    card.style.display = "flex";
    const errorDisplay = createDisplayElement("p", message, "errorDisplay");
    card.appendChild(errorDisplay);
}

// Show loading indicator
function showLoading() {
    const loadingDisplay = createDisplayElement("p", "Loading...", "loadingDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(loadingDisplay);
}

// Hide loading indicator
function hideLoading() {
    card.textContent = "";
}

// Show pop-up message
function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
}

// Hide pop-up message
function hidePopup() {
    popup.style.display = "none";
}
