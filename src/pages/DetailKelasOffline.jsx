import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import JadwalWebinar from "../components/JadwalWebinar";

const DetailKelasOffline = () => {
  return (
    <>
    <Navs />
    <h1>detail kelas offline</h1>
    <Container>
      <JadwalWebinar />
    </Container>
    <Footer />
    </>
  );
}

export default DetailKelasOffline;