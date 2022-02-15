import CardComponent from "../CardComponent/index";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState } from "react";
import {
  ButtomComponentSave,
  ButtomComponentClear,
  ButtomComponentDelete,
} from "../ButtomComponent/index";

function Suporte() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [funcao, setFuncao] = useState("");

  function alertarCliente(e) {
    e.preventDefault();
    return console.log(
      nome,
      cpf,
      endereco,
      bairro,
      numero,
      cidade,
      uf,
      cep,
      funcao
    );
  }

  return (
    <div className="containerGeralSuporte">
      <CardComponent titleCard={"Cadastro"}>
        <div>
          <div>
            <RowInputComponent>
              <InputComponent
                labelText={"Nome"}
                colSize={"col-sm-3"}
                placeholderText={"Nome"}
                typeInput={"text"}
                propsValue={nome}
                propsSetValue={setNome}
              />

              <InputComponent
                labelText={"CPF"}
                colSize={"col-sm-2"}
                placeholderText={"CPF"}
                typeInput={"text"}
                propsValue={cpf}
                propsSetValue={setCpf}
              />
              <InputComponent
                labelText={"Endereço"}
                colSize={"col-sm-3"}
                placeholderText={"Endereço"}
                typeInput={"text"}
                propsValue={endereco}
                propsSetValue={setEndereco}
              />
              <InputComponent
                labelText={"Bairro"}
                colSize={"col-sm-3"}
                placeholderText={"Bairro"}
                typeInput={"text"}
                propsValue={bairro}
                propsSetValue={setBairro}
              />
              <InputComponent
                labelText={"Numero"}
                colSize={"col-sm-1"}
                placeholderText={"N°"}
                typeInput={"text"}
                propsValue={numero}
                propsSetValue={setNumero}
              />
            </RowInputComponent>
          </div>

          <div style={{ marginTop: "10px" }}>
            <RowInputComponent>
              <InputComponent
                labelText={"Cidade"}
                colSize={"col-sm-2"}
                placeholderText={"Cidade"}
                typeInput={"text"}
                propsValue={cidade}
                propsSetValue={setCidade}
              />
              <InputComponent
                labelText={"UF"}
                colSize={"col-sm-1"}
                placeholderText={"UF"}
                typeInput={"text"}
                propsValue={uf}
                propsSetValue={setUf}
              />
              <InputComponent
                labelText={"CEP"}
                colSize={"col-sm-2"}
                placeholderText={"CEP"}
                typeInput={"text"}
                propsValue={cep}
                propsSetValue={setCep}
              />
              <InputComponent
                labelText={"Função"}
                colSize={"col-sm-2"}
                placeholderText={"Função"}
                typeInput={"text"}
                propsValue={funcao}
                propsSetValue={setFuncao}
              />

              {/* <InputSelectComponent labelText={"Nível"} colSize={"col-sm-2"} /> */}
            </RowInputComponent>
          </div>
        </div>

        <div
          style={{
            width: "100%!important",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <ButtomComponentSave propsAlertarCliente={alertarCliente} />
          <ButtomComponentClear />
          <ButtomComponentDelete />
        </div>
      </CardComponent>
    </div>
  );
}

export default Suporte;
