const fs = require("fs")
const csv = require("csv-parser")

let csvData = []

fs.createReadStream("input.csv")
  .pipe(csv())
  .on("data", (row) => {
    csvData.push(row)
  })
  .on("end", () => {
    fs.writeFileSync("output.json", JSON.stringify(csvData))
  })
