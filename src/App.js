import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import moment from 'moment';
import MainNav from './components/MainNav/MainNav';
import { useJournal } from './context/journal-context';
import Journal from './pages/Journal/Journal';
import { journal as dummyJournal } from './dummydata/journal';

function App() {
	const [, setJournal] = useJournal();

	useEffect(() => {
		const sortedJournal = dummyJournal.sort(
			(a, b) => moment(b.timestamp) - moment(a.timestamp)
		);
		setJournal(sortedJournal);
	}, [setJournal]);

	return (
		<div className="App">
			<MainNav />

			<Routes>
				<Route path="/journal" element={<Journal />} />
				<Route path="/" element={<Navigate to="/journal" replace />} />
			</Routes>
		</div>
	);
}

export default App;
