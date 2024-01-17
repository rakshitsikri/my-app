import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Stayinformed from './routes/Stayinformed';
import Navbar from './routes/Navbar';
import {Route, Routes} from "react-router-dom";
import Contact from './routes/Contact';



function App() {
   return(
      <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About Us />} />
         <Route path="portfolio" element={<Portfolio />} />
         <Route path="stayinformed" element={<Stayinformed />} />
         <Route path="contact" element={<Contact />} />
      </Routes>
      <About />
      <Portfolio />
      <Stayinformed />
      <Contact />
      </>
   );
}



export default App;

