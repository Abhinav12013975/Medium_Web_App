import React from "react";
import Membership from "./components/membership/Membership";
import Navbar from "./components/Navbar";
import Ourstory from "./components/ourstory/Ourstory";
// import Carousel from './components/Carousel'
// import Data from './components/Data'
// import TopStories from './components/TopStories'
// import Footer from './Footer/Footer'
import Home from "./Home";
import Write from './components/write/Write'
// import Signin from './components/Signin/Signin'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Home/> */}
        <Routes>
        
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/ourstory" element={<Ourstory />} />
          <Route exact path="/membership" element={<Membership />} />
          <Route exact path="/write" element={<Write/>} />
          {/* <Route exact path="/signin" element={<Signin/>} /> */}
        </Routes>
      </BrowserRouter>
     
      {/* <Carousel/> */}
      {/* <Data/>
      <TopStories/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
