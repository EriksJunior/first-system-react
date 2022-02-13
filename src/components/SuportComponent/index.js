import CardComponent from "../CardComponent/index";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState } from "react";

function Suporte() {
  const { useInput, setInput } = useState("");

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
                propsValueInput={useInput}
              />

              <InputComponent
                labelText={"CPF"}
                colSize={"col-sm-2"}
                placeholderText={"CPF"}
                typeInput={"text"}
              />
              <InputComponent
                labelText={"Endereço"}
                colSize={"col-sm-3"}
                placeholderText={"Endereço"}
                typeInput={"text"}
              />
              <InputComponent
                labelText={"Bairro"}
                colSize={"col-sm-3"}
                placeholderText={"Bairro"}
                typeInput={"text"}
              />
              <InputComponent
                labelText={"Numero"}
                colSize={"col-sm-1"}
                placeholderText={"N°"}
                typeInput={"text"}
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
              />
              <InputComponent
                labelText={"UF"}
                colSize={"col-sm-1"}
                placeholderText={"UF"}
                typeInput={"text"}
              />
              <InputComponent
                labelText={"CEP"}
                colSize={"col-sm-2"}
                placeholderText={"CEP"}
                typeInput={"text"}
              />
              <InputComponent
                labelText={"Função"}
                colSize={"col-sm-2"}
                placeholderText={"Cargo"}
                typeInput={"text"}
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
