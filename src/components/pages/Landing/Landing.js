import React, { useState, useEffect, useMemo } from 'react';
import styles from './Landing.module.css';
import { easeSinInOut } from 'd3-ease';
import { animated, useSpring } from 'react-spring';
import { motion } from 'framer-motion';
import TopNav from '../../UI/TopNav/TopNav';
// import { animated, config, useSpring, useTrail } from 'react-spring';

const bubbleNavArray = [0, 1, 2];
// const useBubbleSpring = delay => {
// 	return useSpring({
// 		config: {
// 			...config.gentle,
// 			// easing: t => easeSinInOut(t),
// 			duration: 3000,
// 		},
// 		delay: delay,
// 		from: {
// 			y: 0,
// 		},
// 		to: async next => {
// 			while (1) {
// 				await next({ y: 1 });
// 			}
// 		},
// 		reset: true,
// 	});
// };

export default function Landing() {
	// const bubbleSpring1 = useBubbleSpring(200);
	// const bubbleSpring2 = useBubbleSpring(400);
	// const bubbleSpring3 = useBubbleSpring(600);
	// const springs = {
	// 	bubbleSpring1,
	// 	bubbleSpring2,
	// 	bubbleSpring3,
	// };

	// useEffect(() => {

	// }, []);

	const topContainerProps = useSpring({
		config: {
			duration: 1000,
		},
		delay: 100,
		transform: 'translateY(0%)',
		opacity: 1,
		from: {
			opacity: 0,
			transform: 'translateY(-100%)',
		},
	});

	const bottomContainerProps = useSpring({
		config: {
			duration: 1000,
		},
		delay: 100,
		transform: 'translateY(0%)',
		opacity: 1,
		from: {
			opacity: 0,
			transform: 'translateY(100%)',
		},
		onRest: () => {
			// console.log(testBool);
			// setTestBool(false);
		},
	});

	return (
		<div className={styles.landingWrapper}>
			<TopNav />
			<animated.div
				style={topContainerProps}
				className={styles.cardWrapper}
			>
				<div className={styles.headerCard}>
					<h1 className={styles.nameHeader}>Christian Coleman</h1>
					<span className={styles.headerSeparator} />
					<h3 className={styles.subHeader}> Front End Engineer</h3>
				</div>
			</animated.div>
			<animated.div
				style={bottomContainerProps}
				className={styles.bottomContainer}
			>
				<span className={styles.scrollText}>SCROLL</span>
				<div className={styles.bubblesFlexWrapper}>
					{bubbleNavArray.map((num, idx) => {
						return (
							<div className={styles.bubbleClickContainer}>
								<motion.span
									key={num}
									className={styles.bubble}
									animate={{ y: '-0.5vw' }}
									transition={{
										repeat: Infinity,
										duration: 2,
										delay: num * 0.3,
										repeatType: 'reverse',
									}}
								/>
							</div>
						);
					})}
				</div>
			</animated.div>
		</div>
	);
}
