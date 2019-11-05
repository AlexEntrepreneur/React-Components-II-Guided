import React, { useState } from 'react';

import './App.css';

import { students } from './studentsData';

import StudentsContainer from './components/StudentsContainer';

function App() {
	const [selectedStudent, setSelectedStudent] = useState('');
	return (
		<div className="App">
			<header>
				<h1>Select a Character</h1>
				<h3>You Selected: </h3>
				<h2>{selectedStudent}</h2>
			</header>
			<StudentsContainer
				students={students}
				selected={selectedStudent}
				setSelectedStudent={setSelectedStudent}
			/>
		</div>
	);
}

export default App;
