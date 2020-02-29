import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';
import Projects from './components/pages/Projects/Projects';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Landing />
					</Route>
					<Route path='/projects'>
						<Projects />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
