import "./CardComponent.css";

function CardComponent({ children, titleCard, colorTitle, font }) {
  return (
    <div className="card containerCard shadow">
      <div className="card-header">
        <strong style={{ color: colorTitle, fontFamily: font }}>
          {titleCard}
        </strong>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardComponent;
