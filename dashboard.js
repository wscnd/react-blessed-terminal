import React, { Fragment } from 'react';

import blessed from 'blessed';
import { render } from 'react-blessed';

import Box from './components/Box';
import Today from './components/Today';

const App = () => {
  return (
    <Fragment>
      <Today
        style={{
          top: 0,
          left: 0,
          width: "50%",
          height: "50%",
          border: { type: "line" },
          style: { border: { fg: "red" } },
        }}
        fetchWeatherInterval={5000}
      />
      <Box
        label="Recent Commits"
        top={0}
        left="50%"
        width="50%"
        height="50%"
      ></Box>

      <Box label="Diff" top="50%" left={0} width="50%" height="50%"></Box>
      <Box label="Pomodoro" top="50%" left="50%" width="25%" height="50%"></Box>
      <Box label="Branches" top="50%" left="50%" width="25%" height="50%"></Box>
      <Box label="Remote" top="50%" left="75%" width="25%" height="50%"></Box>
    </Fragment>
  );
};

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "Develop Dashboard",
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

render(<App />, screen);
