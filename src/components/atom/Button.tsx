import React from 'react';

interface IButtonProps {
	children?: React.ReactNode | string;
	className?: string;
	textStyle?: string;
	size?: 'small' | 'medium' | 'large';
	variant?: 'text' | 'solid' | 'outline';
	startIcon?: React.ReactNode | null;
	endIcon?: React.ReactNode | null;
}
function getButtonSize(size: string) {
	if (size === 'large') {
		return 'px-24 py-8';
	}
	if (size === 'medium') {
		return 'px-10 py-4';
	}

	if (size === 'small') {
		return 'px-6 py-1';
	}
}
const getVariant = (variant: string) => {
	if (variant === 'text') {
		return 'border-none text-white';
	}
	if (variant === 'solid') {
		return 'text-white bg-secondary';
	}
	if (variant === 'outline') {
		return 'border-bg';
	}
};

export const Button = ({
	children = '',
	variant = 'outline',
	size = 'small',
	className = '',
    textStyle='',
	startIcon = null,
	endIcon = null,
	...rest
}: IButtonProps) => {
    const btnSize = getButtonSize(size)
    const btnVariant = getVariant(variant)
	return (
		<button className={`${btnSize} ${btnVariant} ${className} flex justify-between gap-6 items-center`}  {...rest}>
			{startIcon ? <div className="text-inherit">{startIcon}</div> : null}
			{children ? <p className={ textStyle}>{children}</p> : null}
			{endIcon ? <div className="text-inherit">{endIcon}</div> : null}
		</button>
	);
};
