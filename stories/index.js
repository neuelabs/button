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
	.add('icons', () => (
		<section>
			<div>
				<Button size="small">
					<svg width="10px" viewBox="0 0 225 194">
						<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g transform="translate(-88.000000, -103.000000)" fill="#FFFFFF">
								<path d="M176,256.227972 L187.572744,236.208162 L199.604381,257.102167 L277.379711,123 L253.133667,123 L264.725438,103 L312.080002,103 L199.680255,297.059998 L176,256.227972 Z M204.576133,103 L192.959001,123.001846 L122.741682,123 L157.825848,183.629488 L146.314862,203.547748 L88,103 L204.576133,103 Z" />
							</g>
						</g>
					</svg>
					neuelabs icon small
				</Button>
			</div>

			<div>
				<Button>
					<svg width="12px" viewBox="0 0 225 194">
						<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g transform="translate(-88.000000, -103.000000)" fill="#FFFFFF">
								<path d="M176,256.227972 L187.572744,236.208162 L199.604381,257.102167 L277.379711,123 L253.133667,123 L264.725438,103 L312.080002,103 L199.680255,297.059998 L176,256.227972 Z M204.576133,103 L192.959001,123.001846 L122.741682,123 L157.825848,183.629488 L146.314862,203.547748 L88,103 L204.576133,103 Z" />
							</g>
						</g>
					</svg>
					neuelabs icon medium
				</Button>
			</div>

			<div>
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
