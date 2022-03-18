import ClienteRegisterFunctions from "../../service/ClienteService";
import Agenda from "../AgendaComponent";
import {
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentSave,
} from "../ButtomComponent";
import { InputComponent } from "../FormComponents";
import RowInputsComponent from "../RowInputsComponent";
import "./ClienteComponent.css";
import { useCallback, useEffect, useState } from "react";

// const handleChange = useCallback((e) => {}, []);

async function saveCliente() {
  const { data } = await ClienteRegisterFunctions.saveCliente();
  console.log(data);
}

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
              nameInput={"nome"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Razão Social"}
              nameInput={"razaoSocial"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CPF/CNPJ"}
              nameInput={"cpf_cnpj"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-4"}
              labelText={"Endereço"}
              nameInput={"endereco"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Bairro"}
              nameInput={"bairro"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"N°"}
              nameInput={"numero"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"Cidade"}
              nameInput={"cidade"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"UF"}
              nameInput={"uf"}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CEP"}
              nameInput={"cep"}
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
