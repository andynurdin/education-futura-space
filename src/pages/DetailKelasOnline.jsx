import { Container } from "react-bootstrap";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import JadwalWebinar from "../components/JadwalWebinar";
import rewiewOnline from "../assets/imgVideoOnline.png";
import header from "../assets/header.png";
import "./DetailKelasOnline.css";

const DetailKelasOnline = () => {
  return (
    <>
      <Navs />
      <img src={header} alt="" style={{ width: "100%" }} />
      <h1 className="title-detail-online">Review video Kelas Online Sebelumnya</h1>
      <Container>
        <div className="card-video">
          <img src={rewiewOnline} alt="" />
          <h2>Fashion illustrasi hitam putih dengan tema Indonesia</h2>
        </div>
      </Container>
      <h1 className="title-detail-online">Informasi Jadwal Kelas Online</h1>
      <Container>
        <JadwalWebinar />
      </Container>
      <Footer />
    </>
  );
}

export default DetailKelasOnline;