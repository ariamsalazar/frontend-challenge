import React from 'react';
import './assets/styles/custom.scss';
import Homepage from './components/Homepage';
import { GlobalProvider } from './content/GlobalState';

function App(): JSX.Element {
	return (
		<GlobalProvider>
			<div className="App">
				<Homepage />
			</div>
		</GlobalProvider>
	);
}

export default App;
