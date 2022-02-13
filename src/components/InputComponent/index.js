import { useState, useEffect } from "react";

function InputComponent({
  colSize,
  labelText,
  placeholderText,
  typeInput,
  propsValueInput,
}) {
  const { valueInput, setValueInput } = useState({
    nome: propsValueInput.nome,
    cpf: propsValueInput.cpf,
    endereco: propsValueInput.endereco,
    bairro: propsValueInput.bairro,
    numero: propsValueInput.numero,
    cidade: propsValueInput.cidade,
    uf: propsValueInput.uf,
    cep: propsValueInput.cep,
    funcao: propsValueInput.funcao,
  });

  useEffect(() => {
    console.log(propsValueInput);
  }, [valueInput]);

  return (
    <div className={colSize}>
      <div className="input-group-sm" style={{ marginLeft: "10px" }}>
        <label className="col-form-label ">{labelText}</label>
        <input
          type={typeInput}
          className="form-control "
          placeholder={placeholderText}
          size="sm"
          id="inputGroup-sizing-sm"
          value={propsValueInput}
          onChange={({ target }) => setValueInput(target.value)}
        />
      </div>
    </div>
  );
}

function InputSelectComponent({ labelText, colSize }) {
  return (
    <div className={colSize}>
      <div className="input-group-sm" style={{ marginLeft: "10px" }}>
        <label className="col-form-label ">{labelText}</label>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          defaultValue={"Selecionar Nível"}
        >
          <option selected>Selecionar Nível</option>
          <option value="1">Em Trainamento</option>
          <option value="2">Basico</option>
          <option value="3">Mediano</option>
          <option value="4">Avançado</option>
        </select>
      </div>
    </div>
  );
}

export { InputComponent, InputSelectComponent };
