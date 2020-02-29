import React, { useState, useEffect, useMemo } from 'react';
import classes from './Landing.module.css';
import { easeSinInOut } from 'd3-ease';
import { animated, config, useSpring, useTrail } from 'react-spring';

const numArray = [0, 1, 2];
const useBubbleSpring = delay => {
	return useSpring({
		config: {
			...config.gentle,
			// easing: t => easeSinInOut(t),
			duration: 3000,
		},
		delay: delay,
		from: {
			y: 0,
		},
		to: async next => {
			while (1) {
				await next({ y: 1 });
			}
		},
		reset: true,
	});
};

export default function Landing() {
	const bubbleSpring1 = useBubbleSpring(200);
	const bubbleSpring2 = useBubbleSpring(400);
	const bubbleSpring3 = useBubbleSpring(600);
	const springs = {
		bubbleSpring1,
		bubbleSpring2,
		bubbleSpring3,
	};

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
					{numArray.map((num, idx) => {
						return (
							<animated.span
								key={num}
								className={classes.bubbles}
								style={{
									...springs[`bubbleSpring${num + 1}`],
									delay: idx * 1000,
									transform: springs[
										`bubbleSpring${num + 1}`
									].y
										.interpolate({
											range: [0, 0.25, 0.5, 0.75, 1],
											output: [0, -15, 0, 15, 0],
										})
										.interpolate(y => {
											return `translateY(${y}%)`;
										}),
								}}
							/>
						);
					})}
					{/* <span
						className={classes.bubbles}
						style={{
							...bubbleSpring,
							transform: bubbleSpring.y
								.interpolate({
									range: [0, 0.25, 0.5, 0.75, 1],
									output: [0, -30, 0, 30, 0],
								})
								.interpolate(y => {
									return `translateY(${y}%)`;
								}),
						}}
					/>
					<span
						className={classes.bubbles}
						style={{
							...bubbleSpring,
							transform: bubbleSpring.y
								.interpolate({
									range: [0, 0.25, 0.5, 0.75, 1],
									output: [0, -30, 0, 30, 0],
								})
								.interpolate(y => {
									console.log('interpolating');
									return `translateY(${y}%)`;
								}),
						}}
					/>
					<span
						className={classes.bubbles}
						style={{
							...bubbleSpring,
							transform: bubbleSpring.y
								.interpolate({
									range: [0, 0.25, 0.5, 0.75, 1],
									output: [0, -30, 0, 30, 0],
								})
								.interpolate(y => {
									return `translateY(${y}%)`;
								}),
						}}
					/> */}
				</div>
			</animated.div>
		</div>
	);
}
