# World City Weather App

World City Weather App is a web-based application that provides users with current weather information for any city worldwide.

[Visit the deployed site here](#)

## CONTENTS

- [Rationale](#rationale)
- [User Stories](#user-stories)
- [Design](#design)
- [Features](#features)
- [Technologies](#technologies)
- [Deployment and Development](#deployment-and-development)
- [Testing](#testing)
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

## User Stories

1. **As a first-time visitor, I want to quickly understand the app’s purpose and how to use it.**
2. **As a user, I want to input a city name and receive current weather information instantly.**
3. **As a frequent traveler, I want to check the weather for multiple cities easily.**
4. **As a visually impaired user, I want the app to be fully accessible.**

## Design

### Colour Scheme

The app uses a clean and modern color scheme with high contrast to ensure readability and appeal. The chosen color palette can be viewed [here](https://coolors.co/d00000-ffba08-3f88c5-032b43-136f63).

### Typography

The app utilizes the Roboto font for its clean and professional appearance.

### Wireframes

- **Desktop**: [Desktop Wireframe](#)
- **Tablet**: [Tablet Wireframe](#)
- **Mobile**: [Mobile Wireframe](#)

## Features

### Favicon

The app features a weather-themed favicon for easy identification.

### The Navbar

- **Home**: Links back to the main page.
- **How to Use**: Opens a pop-up with instructions.
- **About**: Opens a pop-up with information about the developer.

### The Welcome Page

Provides a brief introduction and prompts the user to enter a city name.

### The Weather Display Card

- **City Name**: Displays the entered city name.
- **Temperature**: Shows the current temperature.
- **Weather Description**: Provides a brief description of the weather.
- **Humidity**: Displays the current humidity level.
- **Weather Icon**: Shows an icon representing the current weather condition.

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

## Deployment and Development

### Deployment

The site is deployed using GitHub Pages. [Visit the deployed site here](#).

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
2. Go to the repository for this project.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH, or GitHub CLI, and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

### APIs

This project uses the OpenWeather API. Sign up for an API key [here](https://openweathermap.org/api).

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
