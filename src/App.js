import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Landing />
					</Route>
					<Route path='/projects'></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
