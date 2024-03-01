import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import Form from "./components/form/forms12"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route index  />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
      <Form/>
    </div>
  );
}

export default App;
