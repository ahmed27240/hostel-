import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { RoomList } from './components/rooms/RoomList';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <RoomList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;