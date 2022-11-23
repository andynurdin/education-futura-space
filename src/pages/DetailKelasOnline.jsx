import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import JadwalWebinar from "../components/JadwalWebinar";

const DetailKelasOnline = () => {
  return (
    <>
    <Navs />
    <h1>detail kelas online</h1>
    <Container>
      <JadwalWebinar />
    </Container>
    <Footer />
    </>
  );
}

export default DetailKelasOnline;