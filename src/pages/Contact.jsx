// import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";


const Contact = () => {
  return (
    <>
      <Navs />
      <div className="bg-contact d-flex">
        <div className="row align-items-center">
          <div className="col-7 position-absolute end-0">
            <div className="card-contact">
              <div className="row">
                <div className="col-6">
                  <h1>Contact</h1>
                  <p>085812345678 (whatsapp only)</p>
                  <p>021212344321 (tlp)</p>
                  <p>futuraspace@gmail.com</p>
                </div>
                <div className="col-6">
                  <h1>Help</h1>
                  <p>085812345678 (Helper)</p>
                  <p>futurahelper@gmail.com</p>
                </div>
              </div>
              <h2>Social Media</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;