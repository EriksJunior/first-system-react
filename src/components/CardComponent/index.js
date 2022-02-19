import "./CardComponent.css";

function CardComponent({ children, titleCard }) {
  return (
    <div className="card containerCard shadow">
      <div className="card-header">
        <strong>{titleCard}</strong>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardComponent;
