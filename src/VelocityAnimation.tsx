import {useCurrentFrame} from 'remotion';
import {WordsList} from './WordsList';

import {loadFont} from '@remotion/google-fonts/Exo2';
const {fontFamily} = loadFont();

import styles from './VelocityAnimation.module.css';

export const VelocityAnimation: React.FC = () => {
	const frame = useCurrentFrame();
	const wellDoneText = 'WELL DONE WELL DONE ';
	const loremText = 'LOREM IPSUM DOLOR LOREM IPSUM DOLOR ';
	const textWidth = loremText.length * 50;
	const scrollingTextLeft = (-frame * 3) % textWidth;
	const scrollingTextRight = ((frame * 3) % textWidth) - textWidth;

	const opacityChangeFrame = 400;

	return (
		<div className={styles.container} style={{fontFamily}}>
			<WordsList
				key="loremIpsumList"
				scrollingTextLeft={scrollingTextLeft}
				scrollingTextRight={scrollingTextRight}
				text={loremText}
				containerStyle={styles.base_list}
			/>

			<WordsList
				key="wellDoneList"
				scrollingTextLeft={scrollingTextLeft}
				scrollingTextRight={scrollingTextRight}
				text={wellDoneText}
				containerStyle={`${styles.end_list} ${
					frame > opacityChangeFrame ? styles.show : ''
				}`}
			/>
		</div>
	);
};
