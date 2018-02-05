![neuelabs button cover](https://github.com/neuelabs/media/blob/master/github/button.png)

[![Build Status](https://travis-ci.org/neuelabs/input.svg?branch=master)](https://travis-ci.org/neuelabs/button)

## Install

```bash
yarn add @neuelabs/button
```

## Usage

```js
'use strict'

import Button from '@neuelabs/button'

const Component = () => (
	<div>
		<Button onClick={() => console.log('neuelabs')}>Click me</Button>
	</div>
)

export default Component
```

## Live Playground

For examples, go to [storybook](https://neuelabs.github.io/button/)

OR

To run that demo on your own computer:

* Clone this repository
* yarn
* yarn storybook
* Visit [http://localhost:9001](http://localhost:9001)

## License

MIT © [neuelabs](https://neuelabs.co)
