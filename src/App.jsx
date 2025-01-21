import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import ApplicationPage from './pages/ApplictionPage';
import ContactUsPage from './pages/ContactUsPage';
import SoftwareTesting from './component/application/software testing/SoftwareTesting';
import softwareTestingData from './component/application/software testing/softwaretestingdata/SoftwareTestingData';
import Saleforce from './component/application/saleforce/Saleforce';
import SaleforceData from './component/application/saleforce/saleforceservice/SaleforceData';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<HomePage />} />
      
        <Route path="/about" element={<AboutUsPage />} />
        
        <Route path="/services" element={<ServicePage />} />

        <Route path="/application" element={<ApplicationPage />} />
      
        <Route path="/contactus" element={<ContactUsPage />} />
    
        <Route
          path="/application/software-testing"
          element={<SoftwareTesting data={softwareTestingData} />}/>

        <Route
         path="/application/Saleforce"
         element={<Saleforce data={SaleforceData}/>}/> 

      
        </Routes>

    </div>
  );
}

export default App;
