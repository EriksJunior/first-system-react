function ButtomComponentSave({ random }) {
  return (
    <button type="button" className="btn btn-success btn-sm" onClick={random}>
      Salvar
    </button>
  );
}

function ButtomComponentClear({ random }) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      style={{ marginLeft: "10px" }}
      onClick={random}
    >
      Novo
    </button>
  );
}

function ButtomComponentDelete() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
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
