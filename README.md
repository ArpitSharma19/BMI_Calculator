# BMI Calculator (React)

A simple, responsive **BMI (Body Mass Index) Calculator** built using **React**.
This web app allows users to enter their weight and height, calculate their BMI, and view a health category based on the result.

---

## Live Demo

**Website:**
[https://bmi-calculator-six-delta.vercel.app/](https://bmi-calculator-six-delta.vercel.app/)

---

## GitHub Repository

[https://github.com/ArpitSharma19/BMI_Calculator](https://github.com/ArpitSharma19/BMI_Calculator)

---

## Features

* Calculate BMI using weight (kg) and height (cm)
* Instant result with health status
* Input validation for correct values
* Reset button to clear inputs
* Clean, modern, responsive UI
* Built with React functional components and hooks

---

## Technologies Used

* **React** (Functional Components + Hooks)
* **JavaScript (ES6)**
* **CSS3** (Responsive design with media queries)
* **Google Fonts** (Inter)

---

## BMI Categories

| BMI Range    | Category       |
| ------------ | -------------- |
| Below 18.5   | Underweight    |
| 18.5 – 24.9  | Healthy weight |
| 25 – 29.9    | Overweight     |
| 30 and above | Obese          |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ArpitSharma19/BMI_Calculator.git
```

### 2. Navigate to the project folder

```bash
cd BMI_Calculator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

---

## Project Structure

```
src/
│
├── App.js        # Main React component
├── App.css       # Styling
└── index.js      # React entry point
```

---

## How It Works

1. User enters weight in kilograms.
2. User enters height in centimeters.
3. Clicks **Calculate**.
4. App computes BMI using:

```
BMI = weight / (height in meters)^2
```

5. Displays BMI value along with a health category message.

---

## Author

**Arpit Sharma**
GitHub: [https://github.com/ArpitSharma19](https://github.com/ArpitSharma19)
