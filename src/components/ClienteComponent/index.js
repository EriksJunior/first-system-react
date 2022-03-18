import Agenda from "../AgendaComponent";
import {
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentSave,
} from "../ButtomComponent";
import { InputComponent } from "../FormComponents";
import RowInputsComponent from "../RowInputsComponent";
import "./ClienteComponent.css";

function Cliente() {
  return (
    <div className="containerGeralCliente">
      <div className="containerInputsCliente">
        <div className="contentInputsCliente">
          <h5>Cadastro de cliente</h5>
          <hr></hr>
          <RowInputsComponent>
            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Nome Fantasia"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Razão Social"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CPF/CNPJ"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-4"}
              labelText={"Endereço"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Bairro"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"N°"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"Cidade"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"UF"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CEP"}
            ></InputComponent>
          </RowInputsComponent>
          <div className="contentGroupButtons">
            <ButtomComponentSave textButton={"Salvar"} />
            <ButtomComponentClear textButton={"Novo"} />
            <ButtomComponentDelete textButton={"Deletar"} />
          </div>
        </div>
      </div>

      <div className="contentAgenda">
        <Agenda />
        <Agenda />
      </div>
    </div>
  );
}

export default Cliente;
