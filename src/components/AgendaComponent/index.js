import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import { InputComponent, InputSelectComponentCliente } from "../InputComponent";

function Agenda() {
  return (
    <div className="containerInputsAgenda">
      <div className="contentInputsAgenda">
        <h5>Agenda</h5>
        <hr></hr>
        <RowInputsComponent>
          <InputSelectComponentCliente
            colSize={"col-sm-3"}
            labelText={"Cliente"}
          />
        </RowInputsComponent>
      </div>
    </div>
  );
}

export default Agenda;
