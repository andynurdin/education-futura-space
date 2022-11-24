import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import JadwalWebinar from "../components/JadwalWebinar";
import rewiewOffline from "../assets/imgVideoOffline.png";
import header from "../assets/header.png";
import "./DetailKelasOnline.css";

const DetailKelasOffline = () => {
  return (
    <>
      <Navs />
      <img src={header} alt="" style={{ width: "100%" }} />
      <h1 className="title-detail-online">Review video Kelas Offline Sebelumnya</h1>
      <Container>
        <div className="card-video">
          <img src={rewiewOffline} alt="" />
          <h2>Fashion director dan styling saat photoshoot | Panca makmum</h2>
        </div>
      </Container>
      <h1 className="title-detail-online">Informasi Jadwal Pertemuan</h1>
      <Container>
        <JadwalWebinar />
      </Container>
      <Footer />
    </>
  );
}

export default DetailKelasOffline;