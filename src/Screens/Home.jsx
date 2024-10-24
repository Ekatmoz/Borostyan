import AboutUs from "../Components/About us/AboutUs";
import Advantages from "../Components/Advantages/Advantages";
import Delivery from "../Components/Delivery/Delivery";
import Footer from "../Components/Footer/Footer";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import Information from "../Components/Information/Information";
import IndexNavbar from "../Components/Navbar/IndexNavbar";
import Partners from "../Components/Partners/Partners";
import Products from "../Components/Products/Products";

const Home = () => {
  return (
    <div id="home">
      <IndexNavbar/>
      <Hero/>
      <Advantages/>
      <Products/>
      <AboutUs/>
      <Delivery/>
      <Gallery/>
      <Information/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home;