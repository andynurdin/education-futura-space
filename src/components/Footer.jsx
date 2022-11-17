import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div  className="footer">
    <Container>
      <Row>
        <Col style={{marginRight:"150px"}}>
          <img src={logo} alt="" className="img" />
          <h3 className="title" style={{marginTop:"-30px"}}>FUTURA SPACE</h3>
          <p className="subtitle">
            Jl. Soekarno, no.50, Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860
          </p>
        </Col>
        <Col>
          <h3 className="title">Category</h3>
          <p className="subtitle">Online Learning</p>
          <p className="subtitle">Offline Learning</p>
        </Col>
        <Col>
          <h3 className="title">About Us</h3>
          <p className="subtitle">About</p>
          <p className="subtitle">Partners</p>
          <p className="subtitle">Our Team</p>
        </Col>
        <Col>
          <h3 className="title">Contact Us</h3>
          <p className="subtitle">futuraspace@gmail.com</p>
          <p className="subtitle">085812344321</p>
        </Col>
        <Col>
          <h3 className="title">Follow Me</h3>
          <p className="subtitle">About</p>
          <p className="subtitle">Partners</p>
          <p className="subtitle">Our Team</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;