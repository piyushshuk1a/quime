# Quizme

Create, share, and take quizzes on any topic with our intelligent quiz platform. Perfect for educators, teams, and anyone looking to test their knowledge.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#usage)
- [Scripts](#contact)

## Getting Started

Follow these instructions to set up and run the QuizMe frontend on your local machine for development and testing purposes.

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
   cd quizme # assuming you cloned in quizme folder
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
npm run preview
```

---

## Scripts

The following scripts are available in the package.json:

`dev`: Runs the application in development mode with hot-reloading.

`preview`: Starts the application in production mode.

`build`: Compiles the TypeScript code into JavaScript.

`lint`: Runs ESLint to check for code quality issues.

`lint:fix`: Fixes linting issues automatically.

`format`: Formats the code using Prettier.

`format:check`: Checks if the code is formatted correctly.
