# xfoxui

> xFoxUI is a ReactUI library

[![NPM](https://img.shields.io/npm/v/xfoxui.svg)](https://www.npmjs.com/package/xfoxui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add xfoxui
```

## Usage

```jsx
import React, { Component } from 'react'

import {Button} from 'xfoxui'
import 'xfoxui/dist/index.css'

class Example extends Component {
  render() {
    return (
    <Button type='primary' text="Click Me" /> <br />
    <Button type='secondary' text="Click Me" /> <br />
    <Button type='dashed'  text="Click Me" /> <br />
    <Button type='link' text="Click Me" /> <br />

    )
  }
}
```

## License

MIT © [mogretici](https://github.com/mogretici)
