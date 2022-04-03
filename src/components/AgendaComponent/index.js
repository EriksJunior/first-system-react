import { useCallback, useState } from "react";
import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import {
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentSave,
} from "../ButtomComponent";
import {
  InputComponentAgenda,
  InputSelectComponentCliente,
  TextAreaComponent,
} from "../FormComponents";

function Agenda() {
  const [agendamento, setAgendamento] = useState({
    id: '',
    id_suporte: '',
    id_cliente: '',
    data_agendamento: '',
    data_inicio: '',
    data_fim: '',
    descricao: '',
    situacao_atendimento: '',
    tipo_atendimento: '',
  })

  const handleChange = useCallback((e) => {
    setAgendamento({ ...agendamento, [e.currentTarget.name]: e.currentTarget.value })
  }, [agendamento])

  function makeAppointment() {
    console.log(agendamento)
  }

  return (
    <div className="containerInputsAgenda">
      <div className="contentInputsAgenda">
        <h5>Agendar</h5>
        <hr></hr>
        <RowInputsComponent>
          <InputComponentAgenda hidden name="id" onChange={handleChange} divHidden={"hidden"} />

          <InputSelectComponentCliente
            colSize={"col-sm-6"}
            labelText={"Cliente"}
            onChange={handleChange}
            name="id_cliente"
          />

          <InputComponentAgenda
            labelText={"Data Agendamento"}
            colSize={"col-sm-6"}
            type={"date"}
            onChange={handleChange}
            name="data_agendamento"
          />

          <InputComponentAgenda
            labelText={"Inicio Atendimento"}
            colSize={"col-sm-6"}
            type={"date"}
            disabled
            onChange={handleChange}
            name="data_inicio"
          />

          <InputComponentAgenda
            labelText={"Fim Atendimento"}
            colSize={"col-sm-6"}
            type={"date"}
            disabled
            onChange={handleChange}
            name="data_fim"
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Tipo Atendimento"}
            onChange={handleChange}
            name="tipo_atendimento"
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Técnico"}
            onChange={handleChange}
            name="id_suporte"
          />

          <InputSelectComponentCliente
            colSize={"col-sm-4"}
            labelText={"Situação "}
            disabled
            valueOptions={"Espera"}
            onChange={handleChange}
            name="situacao_atendimento"
          />
        </RowInputsComponent>
        <RowInputsComponent>
          <TextAreaComponent
            labelText={"Observação"}
            colSize={"col-sm-12"}
            rows="8"
            onChange={handleChange}
            name="descricao"
          />
        </RowInputsComponent>
        <div className="inputGroupAgenda">
          <ButtomComponentSave onClick={() => makeAppointment()} textButton={"Agendar"} />
          <ButtomComponentClear textButton={"Novo"} />
        </div>
      </div>
    </div>
  );
}

export default Agenda;
