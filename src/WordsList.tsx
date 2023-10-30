import React from 'react';
import listDirectionLoremRows from './lib/listDirectionRows';
import listSpeedRows from './lib/listSpeedRows';
import listColors from './lib/listColors';

interface Props {
	scrollingTextLeft: number;
	scrollingTextRight: number;
	text: string;
	containerStyle: string;
}

export const WordsList = (props: Props): React.JSX.Element => {
	const {scrollingTextLeft, scrollingTextRight, text, containerStyle} = props;

	return (
		<div
			className={containerStyle}
			style={{
				background: 'black',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{[...Array(18).keys()].map((index: number) => (
				<div
					key={index}
					style={{
						transform: `translateX(${
							(listDirectionLoremRows[index] === 'left'
								? scrollingTextLeft
								: scrollingTextRight) / listSpeedRows[index]
						}px)`,
						whiteSpace: 'nowrap',
						fontSize: 30,
						lineHeight: 0.9,
						fontWeight: 800,
						color: listColors[index],
					}}
				>
					{text.repeat(100)}
				</div>
			))}
		</div>
	);
};
