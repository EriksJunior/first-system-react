function InputComponent({
  hiddenInput,
  divHidden,
  colSize,
  labelText,
  typeInput,
  propsValue,
  propsSetValue,
}) {
  return (
    <div className={colSize}>
      <div
        className="input-group-sm"
        style={{ marginLeft: "10px" }}
        hidden={divHidden}
      >
        <label className="col-form-label" style={{ fontSize: "12px" }}>
          {labelText}
        </label>
        <input
          type={typeInput}
          className="form-control "
          size="sm"
          id="inputGroup-sizing-sm"
          hidden={hiddenInput}
          value={propsValue}
          onChange={({ target }) => propsSetValue(target.value)}
          style={{
            paddingLeft: "5px",
            paddingBottom: "1px",
            paddingTop: "1px",
            paddingRight: "5px",
          }}
        />
      </div>
    </div>
  );
}

function InputSelectComponent({
  labelText,
  colSize,
  propsSetValue,
  propsValue,
}) {
  return (
    <div className={colSize}>
      <div className="input-group-sm" style={{ marginLeft: "10px" }}>
        <label className="col-form-label " style={{ fontSize: "12px" }}>
          {labelText}
        </label>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          selected
          value={propsValue}
          onChange={({ target }) => propsSetValue(target.value)}
          style={{
            paddingLeft: "5px",
            paddingBottom: "1px",
            paddingTop: "1px",
            paddingRight: "5px",
          }}
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
