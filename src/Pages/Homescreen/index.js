import Navbar from "../Navbar";
import Banner from "../Banner";
import Products from "../../Pages/Products";
import AboutUs from "../AboutUs";
import Faq from "../Faq";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <AboutUs />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
