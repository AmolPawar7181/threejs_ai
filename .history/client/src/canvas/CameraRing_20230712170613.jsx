import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {easing} from 'maath';
import state from '../store';

const CameraRing = ({children}) => {
	const group = useRef();
	return <group ref={group}>{children}</group>;
};

export default CameraRing;
