# xfoxui

> xFoxUI is a React UI library

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
        <Button
          type="primary"
          text="PRIMARY"
        />
        <Button
          type="secondary"
          text="SECONDARY"
        />
        <Button
          type="dashed"
          text="DASHED"
        />
        <Button
          type="link"
          text="LINK"
        />
    </>
  );
};
export default App;
```
## Update Notes
- ### Version 2.0.0
  - React18 upgrade
  - Added Typescript support


## License

MIT © [mogretici](https://github.com/mogretici)
