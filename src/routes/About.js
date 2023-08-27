import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import AboutImg from "../assets/night.jpg"
import Foot from "../components/Foot";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg=" https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="About"
        // text="What's your Next Destination?"
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Foot />
    </>
  );
}

export default About;
