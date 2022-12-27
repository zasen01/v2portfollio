import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Header currentPage={currentPage} handlePageChange={handlePageChange}/> 
        <Hero></Hero>
    {renderPage()}

    <main>
      <>
      </>
    </main>

    <footer>

    </footer>
    </>
    
  );
}

export default App;
