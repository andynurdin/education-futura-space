import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";


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
      <Footer />
    </>
  );
}

export default About;