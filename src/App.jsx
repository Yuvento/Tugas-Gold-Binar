import Footer from './component/Footer';
import Home from './pages/Home';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/car-list" element={<CarList />} />
					<Route path="/cars/:id" element={<CarDetail />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
