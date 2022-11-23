import goldy1 from "../assets/golddy1.png";
import goldy2 from "../assets/golddy2.png";
import bigLogo from "../assets/bigLogo.png";
import bg1 from "../assets/bg1.png";
import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div id="container">
      {/* <!-- Bagan 1 --> */}
      <section className="main1">
        <img src={goldy1} alt="" className="golddy-1" />
        <img src={bigLogo} alt="" className="big-logo" />
      </section>

      {/* <!-- Bagan 2 --> */}
      <section className="main2">
        <img src={bg1} alt="" className="background-golddy_2" />
        <img src={goldy2} alt="" className="golddy-2" />
      </section>
    </div>
  );
}
