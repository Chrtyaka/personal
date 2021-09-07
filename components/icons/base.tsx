import { IconProps } from './types';

export const IconBase = (props: IconProps) => {
	return (
		<svg
			className={props.className}
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox={props.viewBox}
			fill={props.fill}
			width={`${props.width}px`}
			height={`${props.height}px`}
		>
			{props.children}
		</svg>
	);
};
