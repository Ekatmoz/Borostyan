// import React, { useEffect } from 'react';
// import Swal from 'sweetalert2';
import AboutUs from "../Components/About us/AboutUs";
import Advantages from "../Components/Advantages/Advantages";
import Delivery from "../Components/Delivery/Delivery";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import Information from "../Components/Information/Information";
import Partners from "../Components/Partners/Partners";
import Products from "../Components/Products/Products";

const Home = () => {

  // useEffect(() => {
  //   Swal.fire({
  //     title: 'Kedves vásárlóink!',
  //     html: 'November 13.-án szerdán zárva vagyunk!<br />Megértésüket köszönjük szépen!',
  //     icon: 'info',
  //     confirmButtonText: 'Ok',
  //   });
  // }, [])
  return (
    <div id="home">
      <Hero/>
      <Advantages/>
      <Products/>
      <AboutUs/>
      <Delivery/>
      <Gallery/>
      <Information/>
      <Partners/>
    </div>
  )
}

export default Home;