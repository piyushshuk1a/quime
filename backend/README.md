# QuizMe Backend

This is the backend for the QuizMe application, built using **Express.js**. It provides APIs for managing quizzes, users, and other related functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)

---

## Getting Started

Follow these instructions to set up and run the QuizMe backend on your local machine for development and testing purposes.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v22, use .nvmrc for exact version)
- **npm** (Node Package Manager)

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd quizme
   ```

2. Install dependencies

   ```bash
   npm install
   ```

---

## Running the Application

### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

---

## Scripts

The following scripts are available in the package.json:

`dev`: Runs the application in development mode with hot-reloading.

`start`: Starts the application in production mode.

`build`: Compiles the TypeScript code into JavaScript.

`type-check`: Checks for TypeScript type errors without emitting files.

`lint`: Runs ESLint to check for code quality issues.

`lint:fix`: Fixes linting issues automatically.

`format`: Formats the code using Prettier.

`format:check`: Checks if the code is formatted correctly.

---

## Environment Variables

The application uses environment variables for configuration. Create a .env file in the root directory and define the following variables:

You can use the .env.example file as a reference.
