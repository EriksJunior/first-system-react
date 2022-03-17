import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import {
  InputComponent,
  InputSelectComponentCliente,
  TextAreaComponent,
} from "../FormComponents";

function Agenda() {
  return (
    <div className="containerInputsAgenda">
      <div className="contentInputsAgenda">
        <h5>Agenda</h5>
        <hr></hr>
        <RowInputsComponent>
          <InputComponent hiddenInput={"hidden"} divHidden={"hidden"} />

          <InputSelectComponentCliente
            colSize={"col-sm-6"}
            labelText={"Cliente"}
          />

          <InputComponent
            labelText={"Data Agendamento"}
            colSize={"col-sm-6"}
            typeInput={"date"}
          />

          <InputComponent
            labelText={"Data Finalização"}
            colSize={"col-sm-6"}
            typeInput={"date"}
            disabledInput={true}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-6"}
            labelText={"Tipo da Solicitação"}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-6"}
            labelText={"Técnico"}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Status"}
            disabled
            valueOptions={"Espera"}
          />
        </RowInputsComponent>

        <RowInputsComponent>
          <TextAreaComponent
            labelText={"Observação"}
            colSize={"col-sm-12"}
            rows="8"
          />
        </RowInputsComponent>
      </div>
    </div>
  );
}

export default Agenda;
