# xfoxui

> xFoxUI is a ReactUI library

[![NPM](https://img.shields.io/npm/v/xfoxui.svg)](https://www.npmjs.com/package/xfoxui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

| [![PRIMARY](screenshots/screenshot-1.png)](screenshots/screenshot-1.png) | [![SECONDARY](screenshots/screenshot-2.png)](screenshots/screenshot-2.png) | [![DASHED](screenshots/screenshot-3.png)](screenshots/screenshot-3.png) | [![LINK](screenshots/screenshot-4.png)](screenshots/screenshot-4.png) |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |

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
    <Button type='primary' text="PRIMARY" /> <br />
    <Button type='secondary' text="SECONDARY" /> <br />
    <Button type='dashed'  text="DASHED" /> <br />
    <Button type='link' text="LINK" /> <br />

    )
  }
}
```

## License

MIT © [mogretici](https://github.com/mogretici)
