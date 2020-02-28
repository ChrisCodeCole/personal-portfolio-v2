import React from 'react';
import classes from './Landing.module.css';

export default function Landing() {
	return (
		<div className={classes.landingWrapper}>
			<h1 className={classes.nameHeader}>Christian Coleman</h1>
			<span className={classes.headerSeparator} />
			<h3 className={classes.subHeader}> Front End Developer</h3>
			<div className={classes.bottomContainer}>
				<span className={classes.scrollText}>SCROLL</span>
				<div className={classes.bubblesWrapper}>
					<span className={classes.bubbles} />
					<span className={classes.bubbles} />
					<span className={classes.bubbles} />
				</div>
			</div>
		</div>
	);
}
