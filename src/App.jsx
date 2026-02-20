import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ListingDetails from './ListingDetails';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Contact from './Contact';
import LandlordTerms from './LandlordTerms';
import ScrollToTop from './components/ScrollToTop';

import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <Router basename="/kiambu-rental">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landlord-terms" element={<LandlordTerms />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
