import React from 'react'; 
// import Swal from 'sweetalert2';
import AboutUs from '../Components/About us/AboutUs';
import Advantages from '../Components/Advantages/Advantages';
import Delivery from '../Components/Delivery/Delivery';
import Gallery from '../Components/Gallery/Gallery';
import Hero from '../Components/Hero/Hero';
import Description from '../Components/Info/Description';
import Partners from '../Components/Partners/Partners';
import Products from '../Components/Products/Products';

const Home = () => {
  // useEffect(() => {
  //   Swal.fire({
  //     title: 'Kedves vásárlóink!',
  //     html: 'Nyitvatartásunk a jövő hétenk: <br />Hétfőn (április 28.) 8-17-ig<br /> Kedden (április 29.) 8-17-ig<br /> Szerdától vasárnapig üzemünk zárva tart, kiszállítás szünetel!<br /> Megértésüket köszönjük szépen!',
  //     icon: 'info',
  //     confirmButtonText: 'Ok',
  //   });
  // }, []);

  return (
    <div id='home'>
      <Hero />
      <Advantages />
      <Products />
      <AboutUs />
      <Delivery />
      <Gallery />
      <Description />
      <Partners />
    </div>
  );
};

export default Home;
