import CardComponent from "../CardComponent/index";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState } from "react";

function Suporte() {
  const { useInput, setInput } = useState({
    nome: "",
    cpf: "",
    endereco: "",
    bairro: "",
    numero: "",
    cidade: "",
    uf: "",
    cep: "",
    funcao: "",
  });

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
                propsValueInput={"Eriks"}
              />

              <InputComponent
                labelText={"CPF"}
                colSize={"col-sm-2"}
                placeholderText={"CPF"}
                typeInput={"text"}
                propsValueInput={"03.054.436/0001-51"}
              />
              <InputComponent
                labelText={"Endereço"}
                colSize={"col-sm-3"}
                placeholderText={"Endereço"}
                typeInput={"text"}
                propsValueInput={"Rua teste"}
              />
              <InputComponent
                labelText={"Bairro"}
                colSize={"col-sm-3"}
                placeholderText={"Bairro"}
                typeInput={"text"}
                propsValueInput={"Bairro teste"}
              />
              <InputComponent
                labelText={"Numero"}
                colSize={"col-sm-1"}
                placeholderText={"N°"}
                typeInput={"text"}
                propsValueInput={"44"}
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
                propsValueInput={"Viçosa"}
              />
              <InputComponent
                labelText={"UF"}
                colSize={"col-sm-1"}
                placeholderText={"UF"}
                typeInput={"text"}
                propsValueInput={"MG"}
              />
              <InputComponent
                labelText={"CEP"}
                colSize={"col-sm-2"}
                placeholderText={"CEP"}
                typeInput={"text"}
                propsValueInput={"1234-234"}
              />
              <InputComponent
                labelText={"Função"}
                colSize={"col-sm-2"}
                placeholderText={"Ovasso"}
                typeInput={"text"}
                propsValueInput={"Ovasso"}
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
