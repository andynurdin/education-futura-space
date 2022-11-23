import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";


const About = () => {
  return (
    <>
      <Navs />
      <div className="about-banner">

      </div>
      <Container>
        <h1>About</h1>
      </Container>
      <Footer />
    </>
  );
}

export default About;