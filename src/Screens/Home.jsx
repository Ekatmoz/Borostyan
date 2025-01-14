// import React, { useEffect } from 'react';
//import Swal from 'sweetalert2';
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
  //     html: 'December 31.én 12:00 ig nyitva vagyunk. <br />Január 1.-Január 5. között zárva vagyunk,ez idő alatt a kiszállítás is szünetel!<br />Kellemes ünnepeket kívánunk!!',
  //     icon: 'info',
  //     confirmButtonText: 'Ok',
  //    });
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