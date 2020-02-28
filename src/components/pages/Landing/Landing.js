import React, { useState, useEffect } from 'react';
import classes from './Landing.module.css';
import { useSpring, animated } from 'react-spring';

export default function Landing() {
	const [testBool, setTestBool] = useState(true);

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
			console.log(testBool);
			setTestBool(false);
		},
	});

	useEffect(() => {
		console.log(testBool);
	}, [testBool]);

	return (
		<div className={classes.landingWrapper}>
			<animated.div
				style={topContainerProps}
				className={classes.topContainer}
			>
				<h1 className={classes.nameHeader}>Christian Coleman</h1>
				<span className={classes.headerSeparator} />
				<h3 className={classes.subHeader}> Front End Developer</h3>
			</animated.div>
			<animated.div
				style={bottomContainerProps}
				className={classes.bottomContainer}
			>
				<span className={classes.scrollText}>SCROLL</span>
				<div className={classes.bubblesWrapper}>
					<span className={classes.bubbles} />
					<span className={classes.bubbles} />
					<span className={classes.bubbles} />
				</div>
			</animated.div>
		</div>
	);
}
