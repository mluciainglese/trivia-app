# Trivia App

This is a web-based trivia game where you can test your knowledge across various categories. The app retrieves questions from the [Open Trivia Database](https://opentdb.com/) API and allows you to answer them by selecting multiple-choice options. 

## Features (So Far)

- **Category Selection**: You can choose from a range of categories including:
  - General knowledge
  - Entertainment
  - Science
  - Geography
  - History
  - Sports
- **Randomized Answers**: The answers to each question are shuffled to make the quiz more challenging.
- **Instant Feedback**: After you answer a question, the app tells you whether your answer is correct or incorrect.

## What’s Been Done So Far?

- Integrated with the Open Trivia Database API to fetch trivia questions.
- Randomized answer choices for each question to improve the challenge.
- Displayed questions and answers dynamically using vanilla JavaScript.
- Added functionality for the user to get feedback on their answer (correct/incorrect).

## 🚧 Planned Features & Improvements

- **Score Tracking**: Currently, there is no score tracking. In the future, I'd like to add a scoring system that tracks your correct answers across multiple questions.
- **UI Enhancements**: The user interface is minimal at the moment, and I plan to improve the styling to make it more engaging and visually appealing.
- **Difficulty Levels**: Right now, the difficulty is random. I plan to add a feature where the user can select their preferred difficulty level (easy, medium, hard).
- **More Categories**: I’m planning to expand the available categories or let the user search for their own trivia topics.
- **Timer**: Adding a timer for each question will create more of a challenge.
- **Leaderboard**: Allow users to compete with others by submitting their scores to a global leaderboard.

## 🛠️ How to Run the App

### Prerequisites

No special dependencies are needed for this app. All you need is a modern web browser.

### Setup Instructions

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:mluciainglese/trivia-app.git

2. Navigate to the project folder:

    cd trivia-app

3. Open index.html in any web browser to start playing the trivia game.
