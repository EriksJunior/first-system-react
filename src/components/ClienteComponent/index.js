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



function Cliente() {

  const [cliente, setCliente] = useState({
    id: '',
    nome: '',
    razaoSocial: '',
    endereco: '',
    bairro: '',
    cidade: '',
    numero: '' || null,
    uf: '',
    cep: '',
    cpf_cnpj: '',
  });

  const handleChange = useCallback((e) => {
    setCliente({
      ...cliente, [e.currentTarget.name]: e.currentTarget.value
    })
  }, [cliente])

  async function saveCliente() {
    const { data } = await ClienteRegisterFunctions.saveCliente(cliente);
    console.log(data, 'ovooooo');
  }

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
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Razão Social"}
              nameInput={"razaoSocial"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CPF/CNPJ"}
              nameInput={"cpf_cnpj"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-4"}
              labelText={"Endereço"}
              nameInput={"endereco"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-3"}
              labelText={"Bairro"}
              nameInput={"bairro"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"N°"}
              nameInput={"numero"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"Cidade"}
              nameInput={"cidade"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-1"}
              labelText={"UF"}
              nameInput={"uf"}
              onChange={handleChange}
            ></InputComponent>

            <InputComponent
              colSize={"col-sm-2"}
              labelText={"CEP"}
              nameInput={"cep"}
              onChange={handleChange}
            ></InputComponent>
          </RowInputsComponent>
          <div className="contentGroupButtons">
            <ButtomComponentSave onClick={() => saveCliente()} textButton={"Salvar"} />
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
