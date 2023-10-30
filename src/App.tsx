import {Composition} from 'remotion';
import {VelocityAnimation} from './VelocityAnimation';

export const RemotionRoot = () => {
	return (
		<div>
			<Composition
				id="VelocityAnimation"
				component={VelocityAnimation}
				durationInFrames={500}
				fps={30}
				width={600}
				height={490}
			/>
		</div>
	);
};
