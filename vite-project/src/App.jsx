import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import AboutMe from './aboutme.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';
import Resume from './resume.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;