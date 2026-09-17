const XLSX = require("xlsx");
const fs = require("fs");
const workbook = XLSX.readFile("testData.xlsx");
const worksheet = workbook.Sheets["Sheet1"];
const data = XLSX.utils.sheet_to_json(worksheet);
fs.writeFileSync(
    "testData.json",
    JSON.stringify(data, null, 2)
);
console.log("Excel converted to JSON successfully!");