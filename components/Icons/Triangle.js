import * as React from 'react';

const Triangle = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width={115}
		height={115}
		viewBox="0 0 48 48"
		{...props}
	>
		<path fill="none" d="M0 0h48v48H0z" />
		<path
			fill="#8da0ef"
			fillRule="evenodd"
			d="M24 11a1 1 0 0 1 .894.553l12 24A1 1 0 0 1 36 37H12a1 1 0 0 1-.894-1.447l12-24A1 1 0 0 1 24 11Zm0 3.236L13.618 35h20.764L24 14.236Z"
			clipRule="evenodd"
		/>
	</svg>
);

export default Triangle;
