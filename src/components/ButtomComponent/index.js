function ButtomComponentSave({ ...props }) {
  return (
    <button type="button" className="btn btn-success btn-sm" {...props}>
      Salvar
    </button>
  );
}

function ButtomComponentClear({ ...props }) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      style={{ marginLeft: "10px" }}
      {...props}
    >
      Novo
    </button>
  );
}

function ButtomComponentDelete({ ...props }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        {...props}
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
