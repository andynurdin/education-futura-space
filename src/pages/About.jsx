import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";

import header from "../assets/header.png";

const About = () => {
  return (
    <>
      <Navs />
      <img src={header} alt="" style={{width:"100%"}}/>
      <Container>
        <h1>About</h1>
      </Container>
      <Footer />
    </>
  );
}

export default About;