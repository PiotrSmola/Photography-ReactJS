import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Transform from './components/Transform';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import WorkingHours from './components/WorkingHours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useRevealOnScroll();

  return (
    <div className="App">
      <Header setModalOpen={setModalOpen} />
      <main className="main">
        <About />
        <Services />
        <Gallery />
        <Transform setModalOpen={setModalOpen} />
        <Team />
        <Testimonials />
        <WorkingHours />
        <Contact />
      </main>
      <Footer />
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default App;
