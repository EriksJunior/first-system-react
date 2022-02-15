import { useState, useEffect } from "react";

function InputComponent({
  colSize,
  labelText,
  placeholderText,
  typeInput,
  propsValue,
  propsSetValue,
}) {
  useEffect(() => {
    console.log(propsValue, " meu ovooooooooooooo");
  }, [propsValue]);
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
          value={propsValue}
          onChange={({ target }) => propsSetValue(target.value)}
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
