import React from 'react';

import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';

import useInterval from '@use-it/interval';

import useRequest from '../hooks/useRequest';
import { status } from '../utils/constants';
import FONTS from '../utils/fonts';
import {
  findWeather,
  formatWeather,
} from '../utils/weather';
import Box from './Box';

const Today = ({
  fetchWeatherInterval = 900000,
  style = {
    label: "Today",
    top: "center",
    left: "center",
    width: "50%",
    height: "50%",
  },
  search = "Nashvile, TN",
  degreeType = "C",
}) => {
  const [fontIndex, setFontIndex] = React.useState(0);
  const [timeNow, setTimeNow] = React.useState(new Date());
  const weather = useRequest({
    callback: findWeather,
    options: {
      search,
      degreeType,
    },
    requestInterval: fetchWeatherInterval,
  });

  useInterval(() => {
    setTimeNow(new Date());
  }, 60000);

  useInterval(() => {
    setFontIndex((previous) => previous + 1);
  }, 2000);

  const todayDate = timeNow.toLocaleString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const todayTime = figlet.textSync(
    timeNow.toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    {
      font: FONTS[fontIndex % FONTS.length],
    },
  );

  return (
    <Box label="Today" {...style}>
      <text top={1} right={2}>
        {chalk.blue(todayDate)}
      </text>
      <text top="center" left="center">
        {gradient.atlas.multiline(todayTime)}
      </text>
      <text bottom={1} left={2}>
        {weather.status === status.loading
          ? "Loading..."
          : weather.status === status.error
          ? `Error: ${status.error} `
          : formatWeather(weather.data)}
      </text>
    </Box>
  );
};

export default Today;
