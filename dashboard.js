import React from 'react';

import blessed from 'blessed';
import { render } from 'react-blessed';
import { Grid } from 'react-blessed-contrib';

import Box from './components/Box';
import Today from './components/Today';

const App = () => {
  return (
    <Grid rows={12} cols={12}>
      <Today
        label="Today"
        row={0}
        col={0}
        rowSpan={6}
        colSpan={6}
        fetchWeatherInterval={5000} //
      />
      <Box
        label="Recent Commits"
        row={6}
        col={0}
        rowSpan={6}
        colSpan={3} //
      />
      <Box
        label="Diff"
        row={6}
        col={3}
        rowSpan={6}
        colSpan={3} //
      />
      <Box
        label="Pomodoro"
        row={0}
        col={6}
        rowSpan={6}
        colSpan={6} //
      />
      <Box
        label="Branches"
        row={6}
        col={6}
        rowSpan={6}
        colSpan={3} //
      />
      <Box
        label="Remote"
        row={6}
        col={9}
        rowSpan={6}
        colSpan={3} //
      />
    </Grid>
  );
};

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "Develop Dashboard",
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

render(<App />, screen);
