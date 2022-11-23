import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import img1 from "../assets/imgAbout1.png";
import img2 from "../assets/imgAbout2.png";
import img3 from "../assets/imgAbout3.png";
import img4 from "../assets/imgAbout4.png";
import img5 from "../assets/imgAbout5.png";


const About = () => {
  return (
    <>
      <Navs />
      <div className="about-banner d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <div className="title-about">
            <h1>ABOUT</h1>
          </div>
          <div className="subtitle-about">
            <p>    Futura Space adalah Sebuah website yang membantu masyarakat
              menemukan tempat belajar fashiondesign untuk bisa menjadi
              seorang fashion designer dan dapat dipertemukan dengan mentor
              profesional yang tersebar di seluruh indonesia untuk konsultasi
              lebih lanjut  secara online maupun offline.</p>
          </div>
        </div>
      </div>
      <div className="our-team">
        <h1>Our Team</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card-team1">
              <div className="title-team">
                <p>
                  Saya elang, asal dari surabaya, saya suka sekali dengan yang namanya
                  ngoding. di team ini saya bekerja sebagai hipster</p>
              </div>
            </div>
            <img src={img1} alt="" />
            <div className="card-team2">
              <div className="title-team">
                <h3>hipster</h3>
                <p>elang Samudera</p>
              </div>
            </div>
            <img src={img3} alt="" />
          </div>
          <div className="col-4">
            <img src={img2} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="col-4">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;