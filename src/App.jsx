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
import DataScience from './component/application/datascience/DataScience';
import DataScienceData from './component/application/datascience/datascience/DataScienceData';
import RPA from './component/application/rpa/RPA';
import RPAData from './component/application/rpa/rpa/RPAData';
import AWWSService from './component/application/awsservice/AWSService';
import AWSServiceData from './component/application/awsservice/awsservice/AWSServiceData';

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
          element={<SoftwareTesting data={softwareTestingData} />} />

        <Route
          path="/application/salesforce-service"
          element={<Saleforce data={SaleforceData} />} />
        
        <Route
        path="/application/aws-service"
        element={<AWWSService data={AWSServiceData}/>}/>

        <Route
          path="/application/data-science"
          element={<DataScience data={DataScienceData} />} />

        <Route
        path='/application/rpa'
        element={<RPA data={RPAData}/>}/>
      </Routes>

    </div>
  );
}

export default App;
