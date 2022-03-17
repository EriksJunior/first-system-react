import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import {
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentSave,
} from "../ButtomComponent";
import {
  InputComponent,
  InputSelectComponentCliente,
  TextAreaComponent,
} from "../FormComponents";

function Agenda() {
  return (
    <div className="containerInputsAgenda">
      <div className="contentInputsAgenda">
        <h5>Agendar</h5>
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
            labelText={"Inicio Atendimento"}
            colSize={"col-sm-6"}
            typeInput={"date"}
            disabledInput={true}
          />

          <InputComponent
            labelText={"Fim Atendimento"}
            colSize={"col-sm-6"}
            typeInput={"date"}
            disabledInput={true}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Tipo Atendimento"}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Técnico"}
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Situação "}
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
        <div className="inputGroupAgenda">
          <ButtomComponentSave textButton={"Agendar"} />
          <ButtomComponentClear textButton={"Novo"} />
        </div>
      </div>
    </div>
  );
}

export default Agenda;
