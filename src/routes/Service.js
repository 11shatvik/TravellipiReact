import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg=" https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Service"
        // text="What's your Next Destination?"
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <Trip />
      <Foot />
    </>
  );
}

export default Service;
