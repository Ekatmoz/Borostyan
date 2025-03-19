//import React, { useEffect } from 'react';
// import Swal from 'sweetalert2';
import AboutUs from "../Components/About us/AboutUs";
import Advantages from "../Components/Advantages/Advantages";
import Delivery from "../Components/Delivery/Delivery";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import Description from "../Components/Info/Description";
import Partners from "../Components/Partners/Partners";
import Products from "../Components/Products/Products";

const Home = () => {

// useEffect(() => {
//    Swal.fire({
//      title: 'Kedves vásárlóink!',
//      html: 'Figyelem‼️ <br />Március 14,15.en zárva leszünk‼️<br />',
//      icon: 'info',
//      confirmButtonText: 'Ok',
//     });
//  }, []);

  return (
    <div id="home">
      <Hero/>
      <Advantages/>
      <Products/>
      <AboutUs/>
      <Delivery/>
      <Gallery/>
      <Description/>
      <Partners/>
    </div>
  )
}

export default Home;