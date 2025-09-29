# gitmystic
This project is a whimsical web application that predicts a developer's "Code Destiny" using their GitHub profile. It combines a visually engaging particle background with a fun, pseudo-mystical interpretation of public GitHub data.

## Features

* **Mystical UI:** Utilizes **`particles.js`** to create a dynamic, star-like background effect (`"shape": "star"`, white particles, interconnected lines). 
* **Code Destiny Readings:** Generates four unique, themed readings based on GitHub data: **Past**, **Present**, **Future**, and **Aura**.
* **GitHub Integration:** Fetches public profile data, recent activity, and repository information using the **GitHub API**.
* **Whimsical Metrics:** Calculates and displays "Destiny Metrics" like **Primary Code Alignment** and **Digital Impact Rating**.
* **Engaging User Experience:** Features loading states, dramatic pauses, and fun, themed text and emojis.
* **Utility Functions:** Includes simple functions for generating **random elements** and finding the **mode** of an array (used to determine the most frequent language).

---

## Tech Stack

* **JavaScript (Vanilla):** For all core logic, API calls, and DOM manipulation.
* **`particles.js`:** For the background animation effect.
* **GitHub API:** For fetching public developer data.
* **HTML/CSS:** For structure and styling (assumed based on the presence of `document.getElementById` and class manipulation).

---

## Getting Started

To run this project locally, you'll need a basic web server setup.

- Clone the Repository

```bash
git clone https://github.com/msrissaxox/gitmystic.git
``` 
- Navigate into the project directory
```bash
cd gitmystic
```
- Install dependencies
```bash
npm install
```
- Start the development server
```base
live-server
```
- Open in browser : http://127.0.0.1:8080/


## How it Works

- User Input: 
The user enters a GitHub username into an input field (assumed to have the ID githubUsername).

- API Fetching: 
The revealDestiny asynchronous function is triggered. It fetches data from three GitHub API endpoints:

/users/{username} (Profile data)

/users/{username}/events (Activity data, though mostly unused in the final readings)

/users/{username}/repos (Repository data)

- Dramatic Pause: 
A 2-second setTimeout is used to simulate a reading process, enhancing the whimsical effect.

- Reading Generation: 
The displayReadings function calls various other functions (generatePastReading, generatePresentReading, etc.) to process the raw GitHub data and craft the themed, "mystical" text.

- Past Reading: 
Based on the account creation date.

- Present Reading: 
Uses a random "Code Aura" and lists the languages used in repositories.

- Aura Reading: 
Reports total stars and followers.

- Destiny Metrics: 
Determines the most used language (mode utility) and calculates a Digital Impact Rating based on a simple formula derived from total stars and followers.

- Display: 
The generated HTML content is injected into the appropriate sections (pastReading, presentReading, etc.) on the page, often accompanied by a magical entrance animation (e.g., adding the visible class).

- Deployment: 
Through Vercel