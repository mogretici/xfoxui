# xFoxUI ReactJS / NextJS UI Library

[![NPM](https://img.shields.io/npm/v/xfoxui.svg)](https://www.npmjs.com/package/xfoxui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<div><img src="/public/buttons.gif" alt="xfoxui-buttons" width='600'></div>

## Install

```bash
npm i --save xfoxui
```
```bash
yarn add xfoxui
```

## Usage

```jsx
import {Button} from 'xfoxui'

const App = () => {
  return (
    <>
      <Button text="XFOXUI" />
      <Button
              variant="dashed"
              text="COOL"
              color={'#c0a0a0'}
              hoverBackgroundColor={'#c0a0a0'}
      />
      <Button
              variant="link"
              text="BUTTONS"
              color={'#55a5e7'}
              hoverColor={'#fff'}
              hoverBackgroundColor={'blue'}
      />
    </>
  );
};
export default App;
```

## Available Components
### Button

| **Props**             | **Type**             |
|-----------------------|----------------------|
| **text** (required)   | _String_             |
| color?                | _String_             |
| fontSize?             | _String_             |
| hoverColor?           | _String_             |
| backgroundColor?      | _String_             |
| hoverBackgroundColor? | _String_             |
| variant?              | _'dashed' \| 'link'_ |
| width?                | _String_             |
| height?               | _String_             |


## Update Notes
- ### v2.0.5 (19.04.2024)
  - More customizable buttons
  - Some bug fixes
- ### v2.0.3 (18.04.2024)
  - React18 upgrade
  - Added Typescript support


## License

MIT © [mogretici](https://github.com/mogretici)
