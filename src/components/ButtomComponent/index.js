function ButtomComponentSave({ propsSave }) {
  return (
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={propsSave}
    >
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

function ButtomComponentDelete() {
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      Deletar
    </button>
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
