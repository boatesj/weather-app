# Welcome to World City Weather App

World City Weather App is an interactive and fully-functional web application designed to provide users with real-time weather information for any city worldwide. It aims to offer a seamless interface for checking current weather conditions, forecasts, and other weather-related data. The application is developed using advanced web technologies to ensure responsiveness, usability, and accessibility.


![World City Weather App Screenshot](/assets/images/wth-mockup.png)

[Visit the deployed site here](https://boatesj.github.io/weather-app/)

## CONTENTS

- [Rationale](#rationale)
  - [Project Introduction](#project-introduction)
  - [Motivation and Inspiration](#motivation-and-inspiration)
  - [Background Information](#background-information)
  - [Project Scope and Limitations](#project-scope-and-limitations)
  - [Problem Statement](#problem-statement)
  - [Proposed Solution](#proposed-solution)
  - [Benefits and Advantages](#benefits-and-advantages)
  - [Future Versions](#future-versions)
  - [Summary](#summary)
- [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Wireframes](#wireframes)
    - [Desktop](#desktop)
    - [Tablet](#tablet)
    - [Mobile](#mobile)
- [Features](#features)
  - [Favicon](#favicon)
  - [The Navbar](#the-navbar)
  - [The Welcome Page](#the-welcome-page)
  - [The Weather Display Card](#the-weather-display-card)
  - [Accessibility](#accessibility)
- [Technologies](#technologies)
  - [Languages](#languages)
  - [Frameworks, Libraries, and Programs](#frameworks-libraries-and-programs)
- [Deployment and Development](#deployment-and-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [Extensions required](#extensions-required)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
  - [APIs](#apis)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
    - [W3C](#w3c)
    - [Lighthouse](#lighthouse)
    - [JS-Hint](#js-hint)
- [Bugs](#bugs)
- [Credits](#credits)

## Rationale

### Project Introduction

World City Weather App is a user-friendly application designed to provide accurate and up-to-date weather information for cities around the world. The primary objective of this project is to create a simple and intuitive interface where users can quickly access weather data.

### Motivation and Inspiration

The motivation behind creating the World City Weather App stems from the need for a straightforward and accessible tool to check weather conditions. With the increasing reliance on web applications for daily tasks, this project aims to provide a reliable and easy-to-use weather forecasting tool.

### Background Information

Weather forecasting is a critical aspect of daily life, influencing activities and decisions. While numerous weather apps exist, many are cluttered with ads or complex features. This project focuses on delivering essential weather information in a clean and efficient manner.

### Project Scope and Limitations

The scope of the project includes developing the web-based app with the following features:
- Real-time weather data retrieval.
- User-friendly interface.
- Accessibility considerations.

Known limitations:
- The app relies on external APIs, which can affect data availability and accuracy.
- Cross-browser compatibility efforts have been made, but some features might not work optimally on all browsers.

### Problem Statement

The primary problem addressed by the World City Weather App is the need for a simple, ad-free weather application that provides accurate information without unnecessary complexity.

### Proposed Solution

The app proposes the following features to solve the identified problems:
- Clean and intuitive UI.
- Reliable weather data from a trusted API.
- Accessibility features to ensure usability for all users.

### Benefits and Advantages

- **Educational Value**: Users can learn about current weather conditions globally.
- **User Engagement**: Simple and interactive interface keeps users engaged.
- **Accessibility**: Designed to be accessible to all users.
- **Ease of Use**: No need for additional installations or plugins.

### Future Versions

Future enhancements may include:
- Detailed forecasts (hourly, weekly).
- Historical weather data.
- Alerts and notifications for severe weather conditions.
- Multi-language support.

### Summary

World City Weather App is an innovative application providing real-time weather information for cities worldwide. With its clean design and user-friendly interface, it aims to offer an efficient and enjoyable user experience.

## User Stories

1. **As a first-time visitor, I want to quickly understand the app’s purpose and how to use it.**
2. **As a user, I want to input a city name and receive current weather information instantly.**
3. **As a frequent traveller, I want to check the weather for multiple cities easily.**
4. **As a visually impaired user, I want the app to be fully accessible.**

## Design

### Colour Scheme

The app uses a clean and modern color scheme with high contrast to ensure readability and appeal. Here is the chosen colour palette  ![Colour palette](/assets/images/color-palette.png)
colour scheme - 1
![Colour palette](/assets/images/color-palette-2.png)
colour scheme - 2

### Typography

The app utilizes the Roboto font for its clean and professional appearance.
- [Roboto](https://fonts.google.com/specimen/Roboto) for the heading and display text.

![Weather App Style](assets/images/weatherApp-style1.png)


### Wireframes

- **Desktop**: ![Desktop Wireframe](/assets/images/desktop-wireframe.png)
- **Tablet**: ![Tablet Wireframe](/assets/images/tablet-wireframes.png)
- **Mobile**: ![Mobile Wireframe](/assets/images/mobile-wireframes.png)

## Features

### Favicon

The app features a weather-themed favicon for easy identification.
- **Favicon**: ![World City Weather App](/assets/images/weatherApp-favicon.png)


### The Navbar

- **Home**: Links back to the main page. ![Main page](/assets/images/weatherApp-5.png)
- **How to Use**: Opens a pop-up with instructions. ![How to use pop-up message](/assets/images/how-to.png)
- **About**: Opens a pop-up with information about the developer. ![About pop-up message](/assets/images/wa-about.png)

### The Welcome Page

Provides a brief introduction and prompts the user to enter a city name.
![Welcome](/assets/images/weatherApp-5.png)

### The Weather Display Card

- **City Name**: Displays the entered city name.
- **Temperature**: Shows the current temperature.
- **Weather Description**: Provides a brief description of the weather.
- **Humidity**: Displays the current humidity level.
- **Weather Icon**: Shows an icon representing the current weather condition.

![Display card](/assets/images/weatherApp-1.png)
![Display card](/assets/images/weatherApp-2.png)

### Error Handling

The app includes robust error handling mechanisms to enhance user experience:

- **Empty City Field**: If the user attempts to search for weather information without entering a city name, the app prompts the user to enter a city name.

![If the city field is empty on click](/assets/images/weatherApp-err.png)

- **Invalid City Name**: If a user enters a city name that cannot be found, the app displays a friendly error message informing the user that the city was not found and suggests checking the spelling.

![If a city cannot be found](/assets/images/weatherApp-4.png)

Here is the code that performs the check, handles any errors, and provides a clear, friendly message to guide the user on what to do next.

```javascript

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
```

### Accessibility

Designed with accessibility in mind, including high contrast and screen reader compatibility.

## Technologies

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries, and Programs

- **FontAwesome**: For weather icons.
- **Google Fonts**: For typography.
- **OpenWeather API**: For fetching weather data.
- **Balsamiq**: For the wireframes.

## Deployment and Development

### Deployment

The site is deployed using GitHub Pages. [Visit the deployed site here](https://boatesj.github.io/weather-app/).

To deploy the site using GitHub Pages:

1. Login (or signup) to GitHub.
2. Go to the repository for this project.
3. Click the settings button.
4. Select Pages in the left-hand navigation menu.
5. From the source dropdown, select main branch and press save.

### Local Development

#### Extensions required

Your IDE will need HTML, CSS, and JavaScript extensions installed.

#### How to Fork

To fork the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the [repository](https://github.com/boatesj/weather-app) for this project.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH, or GitHub CLI, and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

### APIs

This project uses the OpenWeather API. Sign up for an API key [here](https://openweathermap.org/api).

## Testing
Details about manual and automated testing can be found in the [test.md](test.md) file.

### Manual Testing

Testing involved manually checking the functionality across different browsers and devices to ensure compatibility and responsiveness.

### Automated Testing

- **W3C Validator**: HTML and CSS validation.
- **Lighthouse**: Performance, accessibility, and SEO scores.
- **JS Hint**: JavaScript code quality and error checking.

## Testing

### Manual Testing

Testing involved manually checking the functionality across different browsers and devices to ensure compatibility and responsiveness.

### Automated Testing

- **W3C Validator**: HTML and CSS validation.
- **Lighthouse**: Performance, accessibility, and SEO scores.
- **JS Hint**: JavaScript code quality and error checking.

### Bugs

- **Known Issue**: In some browsers, the weather icons might not load correctly. This is being investigated.

## Credits

This project was developed as part of the Code Institute Full Stack Software Development Diploma. Special thanks to online resources such as Stack Overflow, W3C, MDN, and the WebDev Simplified YouTube channel for guidance and solutions to various challenges.


