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



function App() {
   return(
      <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About Us />} />
         <Route path="portfolio" element={<Portfolio />} />
         <Route path="stayinformed" element={<Stayinformed />} />
      </Routes>
      <About />
      <Portfolio />
      <Stayinformed />

      </>
   );
}



export default App;

