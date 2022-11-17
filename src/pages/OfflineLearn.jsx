import { Container } from "react-bootstrap";

import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";
import card12 from "../assets/card12.png";
import header from "../assets/header.png";

const OfflineLearn = () => {
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
          Offline Class
        </h1>
        <div className="row">
          <div className="col-4">
            <Card image={card7} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card8} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card9} title={title} subtitle={subtitle} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card image={card10} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card11} title={title} subtitle={subtitle} />
          </div>
          <div className="col-4">
            <Card image={card12} title={title} subtitle={subtitle} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default OfflineLearn;