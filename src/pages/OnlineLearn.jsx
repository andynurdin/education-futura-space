import { Container } from "react-bootstrap";

import Card from "../components/Card";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import header from "../assets/header.png";

const OnlineLearn = () => {
  const title = "Kelas Fashion Desain";
  const subtitle = "Beginer";

  return (
    <>
    <Navs />
    <img src={header} alt="" style={{width:"100%"}}/>
      <Container>
        <h1 style={{
          width: "fit-content",
          fontFamily: "Zen Antique",
          fontWeight: "400",
          fontSize: "48px",
          padding: "20px 10px",
          background: "black",
          color: "#ffff",
          marginTop: "55px"
        }}>
          Online Class
        </h1>
        <div className="row">
          <div className="col-4">
            <Card image={card1} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card2} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card3} title={title} subtitle={subtitle} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card image={card4} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card5} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card6} title={title} subtitle={subtitle} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OnlineLearn;