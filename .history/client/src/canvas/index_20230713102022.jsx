import {Canvas} from '@react-three/fiber';
import {Environment, Center} from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRing from './CameraRing';
import {AmbientLight} from 'three';

const CanvasModel = () => {
	return (
		<Canvas shadows camera={{position: [0, 0, 0], fov: 25}}>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			<CameraRing>
				<Backdrop />
				<Center>
					<Shirt />
				</Center>
			</CameraRing>
		</Canvas>
	);
};

export default CanvasModel;
