import React from 'react';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Pricing from './Pricing';

export default function App() {
  return (
    <>
      <Navbar />
      <NotFound />
      <Pricing />
      <AboutUs />
      <Footer />
    </>
  );
}
