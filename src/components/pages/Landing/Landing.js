import React, { useState, useEffect } from 'react';
import classes from './Landing.module.css';
import { easeSinInOut } from 'd3-ease';
import { animated, config, useSpring, useTrail } from 'react-spring';

const numArray = [0, 1, 2];

export default function Landing() {
	const bubbleSpring = useSpring({
		config: {
			...config.gentle,
			// easing: t => easeSinInOut(t),
			duration: 3000,
		},
		from: {
			y: 0,
		},
		to: async next => {
			while (1) {
				console.log('updating y');
				await next({ y: 1 });
			}
		},
		reset: true,
	});
	console.log(bubbleSpring);

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

	// useEffect(() => {
	// 	console.log(testBool);
	// }, [testBool]);

	console.log(
		bubbleSpring.y.interpolate({
			range: [0, 0.25, 0.5, 0.75, 1],
			output: [0, -30, 0, 30, 0],
		})
	);
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
					{/* {bubbleTrail.map(({ y, ...rest }, index) => (
						<animated.span
							key={index}
							className={classes.bubbles}
							style={{
								...rest,
								transform: y
									.interpolate({
										range: [0, 0.25, 0.5, 0.75, 1],
										output: [0, -30, 0, 30, 0],
									})
									.interpolate(y => {
										// console.log('y', y);
										return `translateY(${y}%)`;
									}),
								// range: [0, 0.2, 0.4, 0.6, 0.8, 1],
								// output: [0, -30, 0, 30, 0, -30],
							}}
						/>
					))} */}
					{numArray.map((num, idx) => {
						return (
							<span
								key={num}
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
