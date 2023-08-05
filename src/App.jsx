import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Package from './Pages/Package/Package';
import PackageContainer from './Pages/Package/PackageContainer/packageContainer';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            index
            path="/packageContainer"
            element={<PackageContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
