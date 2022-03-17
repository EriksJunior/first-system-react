import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import { InputComponent, InputSelectComponentCliente } from "../FormComponents";

function Agenda() {
  return (
    <div className="containerInputsAgenda">
      <div className="contentInputsAgenda">
        <h5>Agenda</h5>
        <hr></hr>
        <RowInputsComponent>
          <InputComponent hiddenInput={"hidden"} divHidden={"hidden"} />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Cliente"}
          />

          <InputComponent
            labelText={"Data Agendamento"}
            colSize={"col-sm-2"}
            typeInput={"date"}
          />

          <InputComponent
            labelText={"Data Finalização"}
            colSize={"col-sm-2"}
            typeInput={"date"}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Tipo da Solicitação"}
          />
        </RowInputsComponent>
      </div>
    </div>
  );
}

export default Agenda;
