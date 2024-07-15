# Manual Testing

## Header

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| Home Link | Navigates to the home page | Clicked Home Link | Home page loaded | Pass |
| How To Use Link | How To Use modal displays | Clicked How To Use link | How To Use modal displays | Pass |
| How To Use Modal | Modal closes when the close button is clicked | Clicked close button | Modal closed | Pass |
| How To Use Modal | Modal closes when clicking anywhere outside of the modal | Clicked outside of the modal | Modal closed | Pass |
| About Link | About modal displays | Clicked About link | About modal displays | Pass |
| About Modal | Modal closes when the close button is clicked | Clicked close button | Modal closed | Pass |
| About Modal | Modal closes when clicking anywhere outside of the modal | Clicked outside of the modal | Modal closed | Pass |
| Header links:hover | Text underlines when links are hovered | Hovered over each header link | Text underlined | Pass |

## Welcome Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| City input field | Shows error if input is empty when submitting | Submitted empty input field | Error displayed | Pass |
| City input field | Fetches weather data when a valid city is entered | Entered valid city and submitted | Weather data displayed | Pass |
| City input field | Shows error if an invalid city is entered | Entered invalid city and submitted | Error displayed | Pass |

## Weather Display

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| Weather Information | Displays correct weather information | Fetched weather for a valid city | Correct weather information displayed | Pass |
| Error Handling | Displays error for invalid city | Entered an invalid city | Friendly error message displayed | Pass |
| Error Handling | Displays error for empty input | Submitted without entering a city | Prompt to enter a city displayed | Pass |

## Pop-ups and Modals

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| How To Use Modal | Displays instructions on how to use the app | Clicked How To Use link | Instructions displayed | Pass |
| How To Use Modal | Closes when close button is clicked | Clicked close button | Modal closed | Pass |
| How To Use Modal | Closes when clicking outside of the modal | Clicked outside of modal | Modal closed | Pass |
| About Modal | Displays information about the app | Clicked About link | Information displayed | Pass |
| About Modal | Closes when close button is clicked | Clicked close button | Modal closed | Pass |
| About Modal | Closes when clicking outside of the modal | Clicked outside of modal | Modal closed | Pass |

## Accessibility

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| Screen Reader Compatibility | All elements are accessible via screen reader | Navigated the app using a screen reader | All elements accessible | Pass |
| High Contrast Mode | App is usable in high contrast mode | Enabled high contrast mode | App remained fully usable | Pass |
| Keyboard Navigation | All interactive elements are accessible via keyboard | Navigated the app using keyboard only | All elements accessible | Pass |

## Bugs

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |
| Weather Icon Loading | Icons load correctly across all browsers | Checked icon loading in various browsers | Icons not loading in some browsers | Fail (see bugs section in README for more information) |

# Automated Testing

## HTML

The Nu HTML Checker returned: "Document checking completed. No errors or warnings to show."

![HTML code](/assets/images/nu-html-checker.png)

## CSS

The W3C CSS Validator returned 5 errors:

6 .fa-beat var(--fa-animation-delay, 0) is not an animation-delay value : var(--fa-animation-delay, 0)
6 .fa-beat-fade, .fa-fade var(--fa-animation-delay, 0) is not an animation-delay value : var(--fa-animation-delay, 0)
6 .fa-flip var(--fa-animation-delay, 0) is not an animation-delay value : var(--fa-animation-delay, 0)
6 .fa-spin var(--fa-animation-delay, 0) is not an animation-delay value : var(--fa-animation-delay, 0)
6 .fa-rotate-by var(--fa-rotate-angle, none) is not a transform value : rotate(var(--fa-rotate-angle, none))

![CSS Code](/assets/images/fa-errors.png)


These errors are related to the custom properties used by FontAwesome for their animations and transformations. Since these properties are defined within FontAwesome's CSS and are not recognized by the validator, they do not affect my custom code. Moreover, they work correctly in Google Chrome, Firefox, AVG, Safari, and Microsoft Edge browsers.

## JavaScript

JSHint returned no issues when passed through JS Hint. All warnings are ES6 related.

![JSHint](/assets/images/JSHint-1.png)

## Lighthouse Metrics

The Lighthouse Metric test returned scores of 90 and above for the following categories:
- Performance
- Accessibility
- Best Practices
- SEO

![Lighthouse](/assets/images/lighthouse.png)



