# 🚌 Playwright Bus Search Automation

An end-to-end test automation project built using **Playwright and JavaScript** to automate and validate the bus search functionality of **AbhiBus**.

This project demonstrates practical automation concepts including **data-driven testing, dynamic travel-date handling, UI validation, JSON test data, and Excel-to-JSON conversion**.

---

## 🚀 Project Overview

The automation performs the following bus-search workflow:

1. Launches the AbhiBus website
2. Selects the source location
3. Selects the destination
4. Selects the journey date
5. Searches for available buses
6. Validates the search results URL
7. Verifies that buses are available
8. Executes the same flow for multiple test-data combinations

---

## 🛠️ Tech Stack

* **JavaScript**
* **Playwright**
* **Node.js**
* **Excel**
* **JSON**
* **Git**
* **GitHub**
* **GitHub Actions**

---

## 🧪 Test Scenarios

The current test data contains multiple source, destination, and journey-date combinations.

| Source    | Destination | Journey Date |
| --------- | ----------- | ------------ |
| Chennai   | Kovilpatti  | 20-09-2026   |
| Chennai   | Madurai     | 21-09-2026   |
| Bangalore | Chennai     | 22-09-2026   |

The test iterates through the test-data records and executes the bus-search workflow for each combination.

---

## 📂 Project Structure

```text
playwright-bus-searching-automation/
│
├── .github/
│   └── workflows/
│
├── data/
│   └── testData.json
│
├── tests/
│   └── bookbus.spec.js
│
├── utils/
│   └── excelToJson.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

## 📊 Test Data Flow

The project uses external test data to support data-driven automation.

```text
Excel Test Data
      ↓
excelToJson.js
      ↓
testData.json
      ↓
Playwright Test
      ↓
AbhiBus
      ↓
Search Result Validation
```

The Excel-to-JSON utility uses the **xlsx** package to read data from the `Sheet1` worksheet and generate JSON test data.

---

## 📄 Sample Test Data

```json
[
  {
    "From": "Chennai",
    "To": "Kovilpatti",
    "Date": "20-09-2026"
  },
  {
    "From": "Chennai",
    "To": "Madurai",
    "Date": "21-09-2026"
  },
  {
    "From": "Bangalore",
    "To": "Chennai",
    "Date": "22-09-2026"
  }
]
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/113218107029/playwright-bus-searching-automation.git
```

### 2. Navigate to the project

```bash
cd playwright-bus-searching-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run the Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/bookbus.spec.js
```

---

## 📑 View the Playwright Report

After test execution, generate or open the HTML report using:

```bash
npx playwright show-report
```

---

## 🔄 Excel to JSON Conversion

The project includes a utility to convert Excel test data into JSON.

Run:

```bash
node utils/excelToJson.js
```

The utility:

* Reads the Excel workbook
* Accesses the `Sheet1` worksheet
* Converts worksheet data into JSON
* Creates `testData.json`

---

## ✅ Validations

The automation currently validates:

* Successful navigation to the AbhiBus application
* Source and destination selection
* Journey date selection
* Successful bus search
* Search results URL
* Availability of bus search results
* Bus count greater than zero

---

## 📚 Automation Concepts Demonstrated

This project demonstrates hands-on experience with:

* Playwright
* JavaScript
* CSS locators
* Playwright role-based locators
* Assertions
* Browser contexts
* Data-driven testing
* JSON test data
* Excel test data
* Dynamic date handling
* Test execution
* HTML reporting
* Git and GitHub

---

## 🔮 Future Enhancements

The following improvements are planned for future versions:

* Implement Page Object Model (POM)
* Add positive and negative test scenarios
* Improve dynamic calendar/date handling
* Add reusable locator methods
* Add screenshot capture for failures
* Enhance test reporting
* Integrate automated execution with GitHub Actions
* Add API testing scenarios
* Improve test-data management
* Add additional bus-search validations

---

## 👩‍💻 Author

**Revathi Thamizharasan**

QA Engineer | Manual Testing | Playwright | JavaScript | API Testing

---

## 📌 Disclaimer

This project is created for learning and QA automation portfolio purposes.

