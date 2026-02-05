# BMI Calculator (React)

A simple and responsive **BMI (Body Mass Index) Calculator** built with **React**.
This app allows users to enter their weight and height to calculate their BMI and get a health category message.

---

## Features

* Calculate BMI based on weight (kg) and height (cm)
* Displays BMI value with health status
* Input validation
* Reset button to clear values
* Responsive, modern UI
* Clean and simple React functional component

---

## Technologies Used

* React (Functional Components + Hooks)
* JavaScript (ES6)
* CSS3 (Responsive design with media queries)
* Google Fonts (Inter)

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
git clone https://github.com/your-username/bmi-calculator.git
```

### 2. Navigate to the project folder

```bash
cd bmi-calculator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```


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

5. Displays BMI value and health message.

---

## Author

Arpit Sharma
GitHub: [https://github.com/your-username]
