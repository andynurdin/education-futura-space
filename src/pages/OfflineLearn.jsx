import Card from "../components/Card";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";
import card12 from "../assets/card12.png";

const OfflineLearn = () => {
  const title = "Kelas Fashion Desain";
  const subtitle = "Beginer";

  return (
    <>
    <h1 style={{width:"330px", 
    fontFamily:"Zen Antique", 
    fontWeight:"400", 
    fontSize:"48px", 
    padding:"20px 10px", 
    background:"black", 
    color:"#ffff",
    marginTop:"55px"}}>
      Offline Class
    </h1>
    <div className="row">
      <div className="col-4">
        <Card image={card7} title={title} subtitle={subtitle}/>
      </div>
      <div className="col-4">
        <Card image={card8} title={title} subtitle={subtitle}/>
      </div>
      <div className="col-4">
        <Card image={card9} title={title} subtitle={subtitle}/>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <Card image={card10} title={title} subtitle={subtitle}/>
      </div>
      <div className="col-4">
        <Card image={card11} title={title} subtitle={subtitle}/>
      </div>
      <div className="col-4">
        <Card image={card12} title={title} subtitle={subtitle}/>
      </div>
    </div>
    </>
  );
}

export default OfflineLearn;