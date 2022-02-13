import "./CardComponent.css";
import {
  ButtomComponentSave,
  ButtomComponentClear,
  ButtomComponentDelete,
} from "../ButtomComponent/index";

function CardComponent({ children, titleCard }) {
  return (
    <div className="card containerCard">
      <div className="card-header">{titleCard}</div>
      <div className="card-body">{children}</div>

      <div
        style={{
          width: "100%!important",
          display: "flex",
          justifyContent: "end",
          marginBottom: "10px",
        }}
      >
        <ButtomComponentSave />
        <ButtomComponentClear />
        <ButtomComponentDelete />
      </div>
    </div>
  );
}

export default CardComponent;
