import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./header/Header";
import Home from "./home/Home";
import Begginer from './levels/begginer/Begginer';
import Intermediate from './levels/intermediate/Intermediate';
import Advanced from './levels/advanced/Advanced';
import ScrollToTop from './scrollTop/ScrollToTop';
import Contact from './contact/Contact';
import About from './about/About';

import Dsa from "./struggling/dsa/DSA"
import WebDevelopment from './struggling/web-development/WebDevelopment';
import PlacementPrep from './struggling/placement-prep/PlacementPrep';
import Projects from './struggling/projects/Projects';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beginner" element={<Begginer />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/placement-prep" element={<PlacementPrep />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
