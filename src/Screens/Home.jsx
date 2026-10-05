import Hero from '../Components/Hero/Hero';
import AboutUs from '../Components/About us/AboutUs';
import Advantages from '../Components/Advantages/Advantages';
import Delivery from '../Components/Delivery/Delivery';
import Gallery from '../Components/Gallery/Gallery';
import Description from '../Components/Info/Description';
import Partners from '../Components/Partners/Partners';
import Products from '../Components/Products/Products';

const Home = () => {
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
