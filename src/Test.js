import React from 'react';
import "./index.css";
import About from './routes/About';



function test() {
   return(
      <>
      <Navbar />
         <Routes>
            <Route path="about" element={<About Us />} />
         </Routes>
      <About />
      <Footer />
      </>
   );
}



export default test;

