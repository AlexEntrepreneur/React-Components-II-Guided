import React from 'react';
import StudentsContainer from './components/StudentsContainer';

import './App.css';

import { students } from './studentsData';

function App() {
	return (
		<div className="App">
			<header>
				<h1>React Components II</h1>
			</header>
      <StudentsContainer test={"Hello"} studentsData={students} />
		</div>
	);
}

export default App;
