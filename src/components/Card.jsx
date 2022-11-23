import "./Card.css";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="cards">
      <img src={image} alt="" />
      <h5 className="card-title">
        <a href="#">{title}</a>
      </h5>
      <h6 className="card-text">{subtitle}</h6>
    </div>
  );
};

export default Card;
