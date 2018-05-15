'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { checkA11y } from '@storybook/addon-a11y'

import Button from './../'
import styles from './styles.css' // eslint-disable-line no-unused-vars

storiesOf('Button', module)
	.addDecorator(checkA11y)
	.add('colors', () => (
		<section>
			<div>
				<Button>Dark</Button>
			</div>

			<div>
				<Button color="light">Light</Button>
			</div>
		</section>
	))
	.add('sizes', () => (
		<section>
			<div>
				<Button size="small">small</Button>
			</div>

			<div>
				<Button>medium</Button>
			</div>

			<div>
				<Button size="large">large</Button>
			</div>
		</section>
	))
	.add('types', () => (
		<section className="type">
			<div>
				<Button size="small" block={true}>
					block small
				</Button>
			</div>

			<div>
				<Button block={true}>block medium</Button>
			</div>

			<div>
				<Button size="large" block={true}>
					block large
				</Button>
			</div>

			<div>
				<Button>button</Button>
			</div>

			<div>
				<Button type="submit">submit</Button>
			</div>

			<div>
				<Button disabled={true}>disabled</Button>
			</div>
		</section>
	))
	.add('click', () => (
		<section>
			<div>
				<Button onClick={action('clicked')}>click me</Button>
			</div>
		</section>
	))
	.add('radius', () => (
		<section>
			<div>
				<Button radius>radius</Button>
			</div>
		</section>
	))
