const weather = require("weather-js");
const util = require("util");
const { default: chalk } = require("chalk");

const findWeather = util.promisify(weather.find);

const formatWeather = ([results]) => {
  const { location, current, forecast } = results;
  const degreeType = location.degreetype;
  const temperature = `${current.temperature}°${degreeType}`;
  const conditions = current.skytext;
  const low = `${forecast[1].low}°${degreeType}`;
  const high = `${forecast[1].high}°${degreeType}`;

  return `${chalk.yellow(temperature)} and ${chalk.green(
    conditions,
  )} (${chalk.blue(low)} → ${chalk.red(high)})`;
};

module.exports = {
  findWeather,
  formatWeather,
};
