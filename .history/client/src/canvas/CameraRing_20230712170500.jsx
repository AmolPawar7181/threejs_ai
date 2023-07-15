import React from 'react';
import {useFrame} from '@react-three/fiber';
import {easing} from 'maath';
import state from '../store';

const CameraRing = ({children}) => {
	return <group>{children}</group>;
};

export default CameraRing;
