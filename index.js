'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({
	children,
	color,
	size,
	radius,
	block,
	type,
	onClick,
	disabled,
	styles
}) => {
	const classNames = classnames(
		color,
		size,
		{ radius },
		{ block },
		{ disabled }
	)

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
					font-size: 14px;
					font-weight: 600;
					letter-spacing: 2px;
					line-height: 20px;
					background-color: transparent;
					border: 1px solid transparent;
					padding: 8px 16px;
					outline: none;
					display: inline-block;
					cursor: pointer;
				}

				.dark {
					background-color: #111;
					color: #fff;
					border-color: #111;
				}

				.light {
					background-color: #fff;
					color: #000;
				}

				.small {
					padding: 7px 12px;
				}

				.large {
					padding: 12px 24px;
				}

				.radius {
					border-radius: 3px;
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
	size: PropTypes.oneOf(['small', 'large']),
	block: PropTypes.bool,
	radius: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit']),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	styles: PropTypes.object
}

Button.defaultProps = {
	color: 'dark',
	block: false,
	radius: false,
	type: 'button',
	disabled: false
}

export default Button
