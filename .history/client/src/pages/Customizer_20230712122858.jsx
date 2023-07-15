import React, {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useSnapshot} from 'valtio';

import config from '../config/config';
import state from '../store';
import {download} from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';
import {AIPicker, ColorPicker, FilePicker, Tab} from '../components';

const Customizer = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						className='absolute top-0 left-0 z-10'
						key='custom'
						{...slideAnimation('left')}
					>
						<div className='flex item-center min-h-screen'>
							<div className='editortabs-container tabs'></div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
