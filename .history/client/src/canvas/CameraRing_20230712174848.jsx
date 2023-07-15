import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {easing} from 'maath';
import state from '../store';
import {useSnapshot} from 'valtio';

const CameraRing = ({children}) => {
	const group = useRef();
	const snap = useSnapshot(state);

	useFrame((state, delta) => {
		//set the model rotation
		easing.dampE(
			group.current.rotation,
			[state.provider.y / 10, -state.pointer.x / 5, 0],
			0.25,
			delta
		);
	});

	return <group ref={group}>{children}</group>;
};

export default CameraRing;
