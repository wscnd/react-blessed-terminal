# react-blessed-terminal

![screenshot](https://raw.githubusercontent.com/wscnd/react-blessed-terminal/main/screenshot.jpg)
Playground for trying to make terminal UIs with [React Blessed](https://github.com/Yomguithereal/react-blessed).

# Key things

This project demonstrates the power that React provides as a library and also:
- How to deal with rerendering issues when passing down objects to [hooks](https://github.com/wscnd/react-blessed-terminal/blob/a680020d439e5193a7a2042a260bc5ba3ae31245/hooks/useRequest.js#L29) by using [use-deep-compare-effect](https://github.com/kentcdodds/use-deep-compare-effect) (could also wrap the [argument object](https://github.com/wscnd/react-blessed-terminal/blob/a680020d439e5193a7a2042a260bc5ba3ae31245/components/Today.js#L33) with `React.memo`)
- How to see re rendering issues with [stop-runaway-react-effects](https://github.com/kentcdodds/stop-runaway-react-effects)
- setInterval issues with useEffect and fix it by using [use-interval](https://github.com/donavon/use-interval)
