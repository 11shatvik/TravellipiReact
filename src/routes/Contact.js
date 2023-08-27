import ContactForm from "../components/ContactForm";
import Foot from "../components/Foot";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg=" https://images.unsplash.com/photo-1682687218982-6c508299e107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8ODV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Contact"
        // text="What's your Next Destination?"
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Foot />
    </>
  );
}

export default Contact;
