import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './Pages/HomePage';
import HomePageEditor from './components/HomePageEditor';
import CarouselPage from './components/homeDashboard/Carousel';
import EditContent from './components/EditContent';
import ServiceManagement from './components/ServiceManagement';
import Gallery from './components/Gallery';
import Carousel from './components/homeDashboard/Carousel';
import HomePageService from './components/homeDashboard/HomePageService';
import HomeOption from './components/homeDashboard/HomeOption';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/home" element={<HomePageEditor />} />
        <Route path="api/carouselitems" element ={<Carousel/>}/>
        <Route path="api/homepageservice" element ={<HomePageService/>}/>
        <Route path="api/content" element ={<EditContent/>}/>
        <Route path="api/service" element ={<ServiceManagement/>}/>
        <Route path="api/gallery" element ={<Gallery/>}/>
        <Route path="api/homeoption" element ={<HomeOption/>}/>



      </Routes>
    </Router>
  );
}

export default App;
