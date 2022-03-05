import "./CardComponent.css";

function CardComponent({ children, titleCard, colorTitle, alignText }) {
  return (
    <div className="card containerCard shadow">
      <div className="card-header">
        <strong style={{ color: colorTitle, textAlign: alignText }}>
          <div>{titleCard}</div>
        </strong>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardComponent;
