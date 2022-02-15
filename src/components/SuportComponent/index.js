import CardComponent from "../CardComponent/index";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState } from "react";

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
                value={nome}
                setValue={setNome}
              />

              <InputComponent
                labelText={"CPF"}
                colSize={"col-sm-2"}
                placeholderText={"CPF"}
                typeInput={"text"}
                value={cpf}
                setValue={setCpf}
              />
              <InputComponent
                labelText={"Endereço"}
                colSize={"col-sm-3"}
                placeholderText={"Endereço"}
                typeInput={"text"}
                value={endereco}
                setValue={setEndereco}
              />
              <InputComponent
                labelText={"Bairro"}
                colSize={"col-sm-3"}
                placeholderText={"Bairro"}
                typeInput={"text"}
                value={bairro}
                setValue={setBairro}
              />
              <InputComponent
                labelText={"Numero"}
                colSize={"col-sm-1"}
                placeholderText={"N°"}
                typeInput={"text"}
                value={numero}
                setValue={setNumero}
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
                value={cidade}
                setValue={setCidade}
              />
              <InputComponent
                labelText={"UF"}
                colSize={"col-sm-1"}
                placeholderText={"UF"}
                typeInput={"text"}
                value={uf}
                setValue={setUf}
              />
              <InputComponent
                labelText={"CEP"}
                colSize={"col-sm-2"}
                placeholderText={"CEP"}
                typeInput={"text"}
                value={cep}
                setValue={setCep}
              />
              <InputComponent
                labelText={"Função"}
                colSize={"col-sm-2"}
                placeholderText={"Ovasso"}
                typeInput={"text"}
                value={funcao}
                setValue={setFuncao}
              />

              <InputSelectComponent labelText={"Nível"} colSize={"col-sm-2"} />
            </RowInputComponent>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}

export default Suporte;
