'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({
	children,
	color,
	size,
	block,
	type,
	onClick,
	disabled,
	styles
}) => {
	const classNames = classnames(color, size, { block }, { disabled })

	return (
		<button
			className={classNames}
			type={type}
			onClick={onClick}
			disabled={disabled}
			style={styles}
		>
			{children}

			<style jsx>{`
				button {
					background-color: transparent;
					border: none;
					font-weight: 500;
					cursor: pointer;
					text-transform: uppercase;
					letter-spacing: 2px;
					outline: none;
					display: inline-block;
				}

				.dark {
					background-color: #000;
					color: #fff;
				}

				.light {
					background-color: #fff;
					color: #000;
				}

				.small {
					font-size: 8px;
					height: 30px;
					padding-left: 30px;
					padding-right: 30px;
				}

				.medium {
					font-size: 10px;
					height: 40px;
					padding-left: 40px;
					padding-right: 40px;
				}

				.large {
					font-size: 14px;
					height: 50px;
					padding-left: 50px;
					padding-right: 50px;
				}

				.block {
					display: block;
					width: 100%;
				}

				.disabled {
					cursor: not-allowed;
					opacity: 0.5;
				}
			`}</style>
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.oneOf(['dark', 'light']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	block: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit']),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	styles: PropTypes.object
}

Button.defaultProps = {
	color: 'dark',
	size: 'medium',
	block: false,
	type: 'button',
	disabled: false
}

export default Button
