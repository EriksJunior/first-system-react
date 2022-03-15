import CardComponent from "../CardComponent/index";
import ModalComponentConfirm from "../ModalConfirmComponent";
import "./SuportComponent.css";
import { InputComponent, InputSelectComponent } from "../InputComponent/index";
import RowInputComponent from "../RowInputsComponent/index";
import { useState, useEffect } from "react";
import { AiOutlineCheckSquare, AiOutlineZoomIn } from "react-icons/ai";
import { BsPersonLinesFill, BsPersonPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [dataTechnical, setDataTechnical] = useState([]);
  const [totalTechnicians, setTotalTechnicians] = useState(null);

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

  useEffect(() => {
    fetchTechnicalData();
  }, []);

  useEffect(() => {
    const valueTec = dataTechnical.reduce((old, current) => {
      return (old += current.total);
    }, 0);
    setTotalTechnicians(valueTec);
    console.log(valueTec);
  }, [dataTechnical]);

  function proximaPagina() {
    setPage(page + 1);
    getSuportePagination(page + 1);
  }

  function paginaAnterior() {
    setPage(page - 1);
    getSuportePagination(page - 1);
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

  function checkIfThereIsAnId() {
    if (idSuporte === "") return toast.error("Nenhum Técnico selecionado!");
  }

  async function fetchTechnicalData() {
    const data = await SuporteRegisterFunctions.fetchCustomerToTechnicalData();
    setDataTechnical(data);
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

  async function saveAndUpdateDataSuporte() {
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
          fetchTechnicalData();
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
      console.log(error.response.data.errors, "meu ovooooooooooooooooooo");
    }
  }

  async function deleteDataSuporte() {
    try {
      await SuporteRegisterFunctions.deleteSuporte(idSuporte);
      clearDataSuporte();
      getSuportePagination(page);
      fetchTechnicalData();
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
            <ButtomComponentSave onClick={() => saveAndUpdateDataSuporte()} />
            <ButtomComponentClear onClick={() => clearDataSuporte()} />
            <ButtomComponentDelete
              data-bs-toggle={idSuporte === "" ? "" : "modal"}
              data-bs-target={idSuporte === "" ? "" : "#exampleModal"}
              onClick={() => checkIfThereIsAnId()}
            />
          </div>
        </CardComponent>
      </div>
      <div
        className="dataSeachSuporte"
        style={{ width: "100%", height: "70%", display: "flex" }}
      >
        <div className="containerSeachSuporte" style={{ width: "49%" }}>
          <div className="dadosSuporte">
            <div style={{ width: "100%", display: "flex" }}>
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

            <div className="dropDownSuporte shadow" style={{ width: "100%" }}>
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

        <div
          className="dataSuporte"
          style={{
            width: "49%",
            height: "60%",
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardComponent
            colorTitle={"blue"}
            titleCard={"Dados Técnicos"}
            alignText={"center"}
          >
            <div
              className="dataGeneralTechnical"
              style={{
                width: "100%",
                display: "flex",
                height: "100%",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div
                className="dataTechnicalByLevel"
                style={{
                  height: "auto",
                  width: "40%",
                }}
              >
                <table
                  className="table table-sm "
                  style={{
                    height: "auto",
                    backgroundColor: "#f6f5f5",
                    borderRadius: "2px",
                    boxShadow: "1px 1px 2px 1px",
                  }}
                >
                  <thead>
                    <tr>
                      <th>
                        <BsPersonLinesFill size={20} color={"green"} />
                      </th>
                      <th>
                        <div>Níveis </div>
                      </th>

                      <th>/</th>

                      <th>
                        <div>Técnicos</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    style={{ fontWeight: "bold", fontFamily: "monospace" }}
                  >
                    {dataTechnical.map((nivel) => {
                      return (
                        <tr key={nivel.id} style={{ textAlign: "center" }}>
                          <td colSpan="3">{nivel.nivel}</td>
                          <td>{nivel.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div style={{ height: "auto" }}>
                <table
                  className="table table-sm "
                  style={{
                    height: "auto",
                    backgroundColor: "#f6f5f5",
                    borderRadius: "2px",
                    boxShadow: "1px 1px 2px 1px",
                  }}
                >
                  <thead
                    style={{ fontWeight: "bold", fontFamily: "monospace" }}
                  >
                    <tr>
                      <th>
                        <BsPersonPlusFill size={20} color={"green"} />
                      </th>
                      <th>Totais de Técnicos</th>
                      <th>{totalTechnicians}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>

      <ModalComponentConfirm onClick={() => deleteDataSuporte()} />
    </div>
  );
}

export default Suporte;
