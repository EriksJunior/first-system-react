import CardComponent from "../CardComponent/index";
import ModalComponentConfirm from "../ModalConfirmComponent";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState } from "react";
import { AiOutlineCheckSquare, AiOutlineZoomIn } from "react-icons/ai";
import {
  ButtomComponentSave,
  ButtomComponentClear,
  ButtomComponentDelete,
} from "../ButtomComponent/index";
import SuporteRegisterFunctions from "../../service/SuporteService/index";

function Suporte() {
  const [idSuporte, setIdSuporte] = useState("");
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
  const [resultReadSuportes, setResultReadSuporte] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const dataSuporte = {
    id: idSuporte,
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    bairro: bairro,
    numero: numero,
    cidade: cidade,
    uf: uf,
    cep: cep,
    nivel: nivel,
    funcao: funcao,
  };

  function proximaPagina() {
    setPage(page + 1);
    getSuportePagination(page + 1);
  }

  function paginaAnterior() {
    setPage(page - 1);
    getSuportePagination(page - 1);
  }

  async function getSuportePagination(page) {
    const result =
      await SuporteRegisterFunctions.getAllRegisterSuportesListTable(page);
    setResultReadSuporte(result.data);
    setLastPage(result.meta);
    setPage(result.meta.current_page || 1);
  }

  async function assignCustomersToInputs(id) {
    const data = await SuporteRegisterFunctions.editDataSuporte(id);
    setIdSuporte(data.id || "");
    setNome(data.nome || "");
    setCpf(data.cpf || "");
    setEndereco(data.endereco || "");
    setBairro(data.bairro || "");
    setNumero(data.numero || "");
    setCidade(data.cidade || "");
    setUf(data.uf || "");
    setCep(data.cep || "");
    setNivel(data.nivel || "");
    setFuncao(data.funcao || "");
  }

  function testeFunc() {
    console.log("somente um testeeeeeeeeeee");
  }

  function clearDataSuporte() {
    setIdSuporte("");
    setNome("");
    setCpf("");
    setEndereco("");
    setBairro("");
    setNumero("");
    setCidade("");
    setUf("");
    setCep("");
    setNivel("");
    setFuncao("");
  }

  async function saveAndUpdate() {
    try {
      if (idSuporte === "") {
        const data = await SuporteRegisterFunctions.saveDataSuporte(
          dataSuporte
        );
        if (data === null || data === undefined) {
          console.log("Campos com informações incorretas");
          return;
        } else {
          setIdSuporte(data.id);
          getSuportePagination(page);
          return data;
        }
      } else {
        const data = await SuporteRegisterFunctions.updateDataSuporte(
          dataSuporte.id,
          dataSuporte
        );
        getSuportePagination(page);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="containerGeralSuporte">
      <div className="containerSuporte">
        <CardComponent titleCard={"Cadastro"}>
          <div>
            <div>
              <RowInputComponent>
                <InputComponent
                  typeInput={"id"}
                  propsValue={idSuporte}
                  propsSetValue={setIdSuporte}
                  hiddenInput={true}
                  divHidden={true}
                />
                <InputComponent
                  labelText={"Nome"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={nome}
                  propsSetValue={setNome}
                  hiddenInput={false}
                />

                <InputComponent
                  labelText={"CPF"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={cpf}
                  propsSetValue={setCpf}
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"Endereço"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={endereco}
                  propsSetValue={setEndereco}
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"Bairro"}
                  colSize={"col-sm-3"}
                  typeInput={"text"}
                  propsValue={bairro}
                  propsSetValue={setBairro}
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"Numero"}
                  colSize={"col-sm-1"}
                  propsValue={numero}
                  propsSetValue={setNumero}
                  hiddenInput={false}
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
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"UF"}
                  colSize={"col-sm-1"}
                  propsValue={uf}
                  propsSetValue={setUf}
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"CEP"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={cep}
                  propsSetValue={setCep}
                  hiddenInput={false}
                />
                <InputComponent
                  labelText={"Função"}
                  colSize={"col-sm-2"}
                  typeInput={"text"}
                  propsValue={funcao}
                  propsSetValue={setFuncao}
                  hiddenInput={false}
                />

                <InputSelectComponent
                  labelText={"Nível Aprendizado"}
                  colSize={"col-sm-3 col-md-2 col-lg-2 col-xl-2"}
                  propsSetValue={setNivel}
                  propsValue={nivel}
                  hiddenInput={false}
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
            <ButtomComponentSave onClick={() => saveAndUpdate()} />
            <ButtomComponentClear onClick={() => clearDataSuporte()} />
            <ButtomComponentDelete
              onClick={() => SuporteRegisterFunctions.deleteSuporte(idSuporte)}
            />
          </div>
        </CardComponent>
      </div>
      <div className="containerSeachSuporte" style={{ width: "100%" }}>
        <div className="dadosSuporte">
          <div style={{ width: "50%", display: "flex" }}>
            <nav className="navbar ">
              <div style={{ width: "180px" }}>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-controls="navbarToggleExternalContent"
                  data-bs-target="#navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{
                    paddingBottom: "1px",
                    paddingTop: "0px",
                    width: "90%",
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: true == true ? "none" : true,
                  }}
                  onClick={() => getSuportePagination(page)}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Pesquisar Funcionarios
                    </div>
                  </div>
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "start" }}>
                <AiOutlineZoomIn
                  style={{
                    fontSize: "20px",
                    color: "#0d6efd",
                  }}
                ></AiOutlineZoomIn>
              </div>
            </nav>
          </div>

          <div className="dropDownSuporte shadow" style={{ width: "50%" }}>
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-white p-4 table-responsive">
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li
                        className={
                          page === 1 ? "page-item disabled" : "page-item"
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          className="page-link"
                          aria-label="Previous"
                          onClick={paginaAnterior}
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          {page}
                        </a>
                      </li>
                      <li
                        className={
                          page === lastPage.last_page
                            ? "page-item disabled"
                            : "page-item"
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          className="page-link"
                          onClick={proximaPagina}
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Função</th>
                      <th scope="col">Nível Aprendizado</th>
                      <th
                        scope="col"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        Editar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultReadSuportes.map((suporte) => {
                      return (
                        <tr key={suporte.id}>
                          <td>{suporte.nome}</td>
                          <td>{suporte.funcao}</td>
                          <td>{suporte.nivel}</td>
                          <td
                            key={suporte.id}
                            style={{
                              textAlign: "center",
                            }}
                          >
                            <AiOutlineCheckSquare
                              style={{
                                fontSize: "25px",
                                color: "green",
                                cursor: "pointer",
                                marginRight: "10px",
                              }}
                              onClick={() =>
                                assignCustomersToInputs(suporte.id)
                              }
                            ></AiOutlineCheckSquare>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponentConfirm teste={() => testeFunc()} />
    </div>
  );
}

export default Suporte;
