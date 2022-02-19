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
import ClienteFunctions from "../../service/ClienteService/index";

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
  const [nivel, setNivel] = useState("");

  const dataCliente = {
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    bairro: bairro,
    numero: numero,
    cidade: cidade,
    uf: uf,
    cep: cep,
    nivel: nivel,
  };

  function seila() {
    alert("meu ovoooooo");
  }

  return (
    <div className="containerGeralSuporte">
      <div className="containerSuporte">
        <CardComponent titleCard={"Cadastro"}>
          <div>
            <div>
              <RowInputComponent>
                <InputComponent
                  labelText={"Nome"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={nome}
                  propsSetValue={setNome}
                />

                <InputComponent
                  labelText={"CPF"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={cpf}
                  propsSetValue={setCpf}
                />
                <InputComponent
                  labelText={"Endereço"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={endereco}
                  propsSetValue={setEndereco}
                />
                <InputComponent
                  labelText={"Bairro"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={bairro}
                  propsSetValue={setBairro}
                />
                <InputComponent
                  labelText={"Numero"}
                  colSize={"col-sm-1"}
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
                  typeInput={"text"}
                  propsValue={cidade}
                  propsSetValue={setCidade}
                />
                <InputComponent
                  labelText={"UF"}
                  colSize={"col-sm-1"}
                  propsValue={uf}
                  propsSetValue={setUf}
                />
                <InputComponent
                  labelText={"CEP"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={cep}
                  propsSetValue={setCep}
                />
                <InputComponent
                  labelText={"Função"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={funcao}
                  propsSetValue={setFuncao}
                />

                <InputSelectComponent
                  labelText={"Nível"}
                  colSize={"col-sm-2"}
                  propsSetValue={setNivel}
                />
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
            <ButtomComponentSave
              random={() => ClienteFunctions.saveCliente(dataCliente)}
            />
            <ButtomComponentClear />
            <ButtomComponentDelete />
          </div>
        </CardComponent>
      </div>
      <div className="containerSeachCliente">
        <div className="dadosCliente">
          <nav className="navbar ">
            <div>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                aria-controls="navbarToggleExternalContent"
                data-bs-target="#navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ paddingBottom: "1px", paddingTop: "0px" }}
                onClick={() => ClienteFunctions.getAllClientes()}
              >
                <span style={{ fontSize: "13px" }}>Pesquisar Clientes +</span>
              </button>
            </div>
          </nav>

          <div className="dropDownCliente">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-white p-4">
                <h5 className="text-dark h4">Collapsed content</h5>
              </div>
            </div>
          </div>

          <div className="row tablePesquisa">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  <div className="dadosTabela">
                    <table className="table table-bordered border-primary">
                      <thead>
                        <tr>
                          <th scope="col">Nome</th>
                          <th scope="col">Bairro</th>
                          <th scope="col">Telefone</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suporte;
