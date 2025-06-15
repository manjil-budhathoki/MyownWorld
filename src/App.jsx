import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Highlights from './pages/Hightlights';
import Writing from './pages/Writing';
import Library from './pages/Library';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
}

export default App;
