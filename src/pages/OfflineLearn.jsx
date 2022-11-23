import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";
import card12 from "../assets/card12.png";
import header2 from "../assets/header-2.png";

const OfflineLearn = () => {
  const subtitle = "Beginner";

  return (
    <>
      <Navs />
      <img src={header2} alt="" style={{ width: "100%" }} />
      <Container style={{marginBottom:"50px"}}>
        <h1
          style={{
            width: "fit-content",
            fontFamily: "Zen Antique",
            fontWeight: "400",
            fontSize: "48px",
            padding: "20px 10px",
            background: "black",
            color: "#ffff",
            marginTop: "55px",
          }}>
          Offline Class
        </h1>
        <div className="row">
          <div className="col-4">
            <Card image={card7} title={<NavLink to="/kelasOffline">Dress Making</NavLink>} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card8} title={<NavLink to="/kelasOffline">Fashion Stylist</NavLink>} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card
              image={card9}
              title={<NavLink to="/kelasOffline">Pattern Making</NavLink>}
              subtitle="Intermediate"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card
              image={card10}
              title={<NavLink to="/kelasOffline">Fashion Designer Basic</NavLink>}
              subtitle={subtitle}
            />
          </div>
          <div className="col-4">
            <Card
              image={card11}
              title={<NavLink to="/kelasOffline">Fashion Designer Intermediate</NavLink>}
              subtitle="Intermediate"
            />
          </div>
          <div className="col-4">
            <Card
              image={card12}
              title={<NavLink to="/kelasOffline">Fashion Designer Advanced</NavLink>}
              subtitle="Advanced"
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OfflineLearn;
