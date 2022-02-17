function ButtomComponentSave({ click }) {
  return (
    <button type="button" className="btn btn-success btn-sm" onClick={click}>
      Salvar
    </button>
  );
}

function ButtomComponentClear() {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      style={{ marginLeft: "10px" }}
    >
      Limpar
    </button>
  );
}

function ButtomComponentDelete({ click }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        onClick={click}
      >
        Deletar
      </button>
    </div>
  );
}

function ButtomComponentReport() {
  return (
    <button type="button" className="btn btn-infor btn-sm">
      Imprimir
    </button>
  );
}

export {
  ButtomComponentSave,
  ButtomComponentClear,
  ButtomComponentDelete,
  ButtomComponentReport,
};
