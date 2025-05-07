import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Highlights from './pages/Hightlights';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/highlights" element={<Highlights />} />
    </Routes>
  );
}

export default App;
