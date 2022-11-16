import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";

const OfflineLearn = () => {
  return (
    <>
    <h1 style={{width:"300px", 
    fontFamily:"Zen Antique", 
    fontWeight:"400", 
    fontSize:"48px", 
    padding:"20px 10px", 
    background:"black", 
    color:"#ffff",
    marginTop:"55px"}}>
      Offline Class
    </h1>
    <Row>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
    </Row>
    </>
  );
}

export default OfflineLearn;