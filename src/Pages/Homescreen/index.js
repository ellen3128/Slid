import Navbar from "../Navbar";
import Banner from "../Banner";
import Products from "../../Pages/Products";
import AboutUs from "../AboutUs";
import Faq from "../Faq";
import ContactUs from "../ContactUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <AboutUs />
      <Faq />
      <ContactUs />
    </>
  );
}
