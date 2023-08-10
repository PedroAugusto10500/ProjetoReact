import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        </Container>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
