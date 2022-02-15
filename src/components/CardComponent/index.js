import "./CardComponent.css";

function CardComponent({ children, titleCard }) {
  return (
    <div className="card containerCard">
      <div className="card-header">{titleCard}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardComponent;
