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

test('Button default component', t => {
	const tree = render.create(<Button>Default</Button>).toJSON()
	t.snapshot(tree)
})

test('Button large component', t => {
	const tree = render.create(<Button size="large">Large</Button>).toJSON()
	t.snapshot(tree)
})

test('Button with icon component', t => {
	const tree = render
		.create(
			<Button size="large">
				<svg width="14px" viewBox="0 0 225 194">
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g transform="translate(-88.000000, -103.000000)" fill="#FFFFFF">
							<path d="M176,256.227972 L187.572744,236.208162 L199.604381,257.102167 L277.379711,123 L253.133667,123 L264.725438,103 L312.080002,103 L199.680255,297.059998 L176,256.227972 Z M204.576133,103 L192.959001,123.001846 L122.741682,123 L157.825848,183.629488 L146.314862,203.547748 L88,103 L204.576133,103 Z" />
						</g>
					</g>
				</svg>
				neuelabs icon large
			</Button>
		)
		.toJSON()
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

test('Button custom style component', t => {
	const tree = render
		.create(<Button styles={{ borderRadius: '4px' }}>Custom style</Button>)
		.toJSON()
	t.snapshot(tree)
})
