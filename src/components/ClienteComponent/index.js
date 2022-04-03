import ClienteRegisterFunctions from "../../service/ClienteService";
import Agenda from "../AgendaComponent";
import {
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentSave,
} from "../ButtomComponent";
import { InputComponentAgenda } from "../FormComponents";
import RowInputsComponent from "../RowInputsComponent";
import "./ClienteComponent.css";
import { useCallback, useState } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cliente() {
  const [cliente, setCliente] = useState({
    id: "",
    nome: "",
    razaoSocial: "",
    endereco: "",
    bairro: "",
    cidade: "",
    numero: "" || null,
    uf: "",
    cep: "",
    cpf_cnpj: "",
  });

  const handleChange = useCallback((e) => {
    setCliente({ ...cliente, [e.currentTarget.name]: e.currentTarget.value });
  }, [cliente]);

  function handleSaveAndUpdate() {
    cliente.id === "" ? saveCliente() : updateCliente();
  }

  async function saveCliente() {
    const data = await ClienteRegisterFunctions.saveCliente(cliente);
    if (data.status === 200) {
      setCliente({ ...cliente, id: data.data.id });
    }
  }

  async function updateCliente() {
    await ClienteRegisterFunctions.updateCliente(cliente.id, cliente);
  }

  return (
    <div className="containerGeralCliente">
      <div className="containerInputsCliente">
        <div className="contentInputsCliente">
          <h5>Cadastro de cliente</h5>
          <hr></hr>
          <RowInputsComponent>
            <InputComponentAgenda
              colSize={"col-sm-3"}
              labelText={"Nome Fantasia"}
              name={"nome"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-3"}
              labelText={"Razão Social"}
              name={"razaoSocial"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-2"}
              labelText={"CPF/CNPJ"}
              name={"cpf_cnpj"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-4"}
              labelText={"Endereço"}
              name={"endereco"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-3"}
              labelText={"Bairro"}
              name={"bairro"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-1"}
              labelText={"N°"}
              name={"numero"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-2"}
              labelText={"Cidade"}
              name={"cidade"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-1"}
              labelText={"UF"}
              name={"uf"}
              onChange={handleChange}
            ></InputComponentAgenda>

            <InputComponentAgenda
              colSize={"col-sm-2"}
              labelText={"CEP"}
              name={"cep"}
              onChange={handleChange}
            ></InputComponentAgenda>
          </RowInputsComponent>
          <div className="contentGroupButtons">
            <ButtomComponentSave
              onClick={() => handleSaveAndUpdate()}
              textButton={"Salvar"}
            />
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
