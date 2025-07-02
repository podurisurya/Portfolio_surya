import React from 'react';
import Navbar from './components/Navbar';
import ContentOne from './components/ContentOne';
import Services from './components/Services';
import ClinicContent from './components/ClinicContent';
import Specialists from './components/Specialists';
import CustomersSay from './components/CustomersSay';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <ContentOne />
      <Services />
      <ClinicContent />
      <Specialists />
      <CustomersSay />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;