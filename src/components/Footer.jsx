import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div  className="footer">
    <Container className="footer">
      <div className="row">
        <div className="col-4">
          <img src={logo} alt="" className="img-footer" />
          <div className="col-7">
          <h3 className="title" style={{marginTop:"-20px"}}>FUTURA SPACE</h3>
          <p className="subtitle">
            Jl. Soekarno, no.50, Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860
          </p>
          </div>
        </div>
        <div className="col-2">
          <h3 className="title">Category</h3>
          <p className="subtitle">Online Learning</p>
          <p className="subtitle">Offline Learning</p>
        </div>
        <div className="col-2">
          <h3 className="title">About Us</h3>
          <p className="subtitle">About</p>
          <p className="subtitle">Partners</p>
          <p className="subtitle">Our Team</p>
        </div>
        <div className="col-2">
          <h3 className="title">Contact Us</h3>
          <p className="subtitle">futuraspace@gmail.com</p>
          <p className="subtitle">085812344321</p>
        </div>
        <div className="col-2">
          <h3 className="title">Follow Me</h3>
          <p className="subtitle">About</p>
          <p className="subtitle">Partners</p>
          <p className="subtitle">Our Team</p>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Footer;