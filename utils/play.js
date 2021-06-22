const findWeather = require("./weather").findWeather;

const consoleDir = (data) => console.dir(data, { depth: Infinity });

findWeather({
  search: "Nashvile, TN",
  degreeType: "F",
})
  .then(consoleDir)
  .catch(console.error);
