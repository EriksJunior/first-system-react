import { useState, useEffect } from "react";

function InputComponent({
  colSize,
  labelText,
  placeholderText,
  typeInput,
  propsValue,
  propsSetValue,
}) {
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

function InputSelectComponent({ labelText, colSize, propsSetValue }) {
  return (
    <div className={colSize}>
      <div className="input-group-sm" style={{ marginLeft: "10px" }}>
        <label className="col-form-label ">{labelText}</label>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          defaultValue={"Selecionar Nível"}
          selected
          onChange={({ target }) => propsSetValue(target.value)}
        >
          <option>Selecionar Nível</option>
          <option value="Em Trainamento">Em Trainamento</option>
          <option value="Basico">Basico</option>
          <option value="Mediano">Mediano</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
    </div>
  );
}

export { InputComponent, InputSelectComponent };
