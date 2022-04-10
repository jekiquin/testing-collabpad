import { Routes, Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import Journal from './pages/Journal/Journal';

function App() {
	return (
		<div className="App">
			<MainNav />
			<Routes>
				<Route path="/journal" element={<Journal />} />
			</Routes>
		</div>
	);
}

export default App;
