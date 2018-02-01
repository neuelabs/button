'use strict'

import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import Button from './../'

test('Button dark component', t => {
	const tree = render.create(<Button color="dark">Default</Button>).toJSON()
	t.snapshot(tree)
})

test('Button light component', t => {
	const tree = render.create(<Button color="light">Light</Button>).toJSON()
	t.snapshot(tree)
})

test('Button small component', t => {
	const tree = render.create(<Button size="small">Small</Button>).toJSON()
	t.snapshot(tree)
})

test('Button medium component', t => {
	const tree = render.create(<Button size="medium">Medium</Button>).toJSON()
	t.snapshot(tree)
})

test('Button large component', t => {
	const tree = render.create(<Button size="large">Large</Button>).toJSON()
	t.snapshot(tree)
})

test('Button block component', t => {
	const tree = render.create(<Button block={true}>Block</Button>).toJSON()
	t.snapshot(tree)
})

test('Button submit component', t => {
	const tree = render.create(<Button type="submit">Submit</Button>).toJSON()
	t.snapshot(tree)
})

test('Button disabled component', t => {
	const tree = render.create(<Button disabled={true}>Disabled</Button>).toJSON()
	t.snapshot(tree)
})

test('Button click component', t => {
	const tree = render
		.create(<Button onClick={() => console.log('clicked!')}>Click</Button>)
		.toJSON()
	t.snapshot(tree)
})
