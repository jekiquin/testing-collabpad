import { Routes, Route, Navigate } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import Journal from './pages/Journal/Journal';

function App() {
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
