import { Routes, Route, Navigate } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import JournalProvider from './context/journal-context';
import Journal from './pages/Journal/Journal';

function App() {
	return (
		<div className="App">
			<MainNav />
			<JournalProvider>
				<Routes>
					<Route path="/journal" element={<Journal />} />
					<Route path="/" element={<Navigate to="/journal" replace />} />
				</Routes>
			</JournalProvider>
		</div>
	);
}

export default App;
