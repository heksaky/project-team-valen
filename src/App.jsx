import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Valen from './pages/valen';
import Dhoni from './pages/dhoni';
import Zebe from './pages/zebe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile1" element={<Valen />} />
        <Route path="/profile2" element={<Dhoni />} />
        <Route path="/profile3" element={<Zebe />} />
      </Routes>
    </Router>
  );
}

export default App;