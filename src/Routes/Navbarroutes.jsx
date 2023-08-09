import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../Components/Navbar_Components/About/About';
import Services from '../Components/Navbar_Components/Services/Services';
import Portfolio from '../Components/Navbar_Components/Portfolio/Portfolio'
import Navbar from '../Components/Navbar/Navbar';
import About1 from '../Components/Navbar_Components/About/About1';
import About3 from '../Components/Navbar_Components/About/About3';
import About2 from '../Components/Navbar_Components/About/About2';
import Services3 from '../Components/Navbar_Components/Services/Services3';
import Services2 from '../Components/Navbar_Components/Services/Services2';
import Services1 from '../Components/Navbar_Components/Services/Services1';

import Careers from '../Components/Navbar_Components/JobBoard/Careers';
import JobCategory from '../Components/JobCategory';

const Navbarroutes = () => {
  return (
    <div>
      <Navbar/>
    <Routes>

      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/jobBoard" element={<JobCategory />} />
      <Route path='/careers' element={<Careers />}></Route>
      <Route path="/services/service1" element={<Services1 />} />
      <Route path="/services/service2" element={<Services2 />} />
      <Route path="/services/service3" element={<Services3 />} />
      <Route path="/about/about1" element={<About1 />} />
      <Route path="/about/about2" element={<About2 />} />
      <Route path="/about/about3" element={<About3 />} />
    </Routes></div>
  )
}

export default Navbarroutes 