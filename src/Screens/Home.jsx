import { Suspense, lazy } from 'react';
// import Swal from 'sweetalert2';
import Hero from '../Components/Hero/Hero';

const AboutUs = lazy(() => import('../Components/About us/AboutUs'));
const Advantages = lazy(() => import('../Components/Advantages/Advantages'));
const Delivery = lazy(() => import('../Components/Delivery/Delivery'));
const Gallery = lazy(() => import('../Components/Gallery/Gallery'));
const Description = lazy(() => import('../Components/Info/Description'));
const Partners = lazy(() => import('../Components/Partners/Partners'));
const Products = lazy(() => import('../Components/Products/Products'));

const Home = () => {
  // useEffect(() => {
  //   Swal.fire({
  //     title: 'Kedves vásárlóink!',
  //     html: 'Augusztus 24-29.-ig üzemünk zárva tart,<br> a kiszállítás is szünetel.<br /> Megértésüket köszönjük szépen!',
  //     icon: 'info',
  //     confirmButtonText: 'Ok',
  //   });
  // }, []);

  return (
    <div id='home'>
      <Hero />
      <Suspense fallback={null}>
        <Advantages />
        <Products />
        <AboutUs />
        <Delivery />
        <Gallery />
        <Description />
        <Partners />
      </Suspense>
    </div>
  );
};

export default Home;
