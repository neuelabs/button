'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './../'
import styles from './styles.css' // eslint-disable-line no-unused-vars

storiesOf('Button', module)
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
				<Button>type button</Button>
			</div>

			<div>
				<Button type="submit">type submit</Button>
			</div>

			<div>
				<Button disabled={true}>disabled button</Button>
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
