import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          Where in the world?
        </Link>
        <div>Dark Mode</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
