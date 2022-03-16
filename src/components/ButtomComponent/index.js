function ButtomComponentSave({ ...props }) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "#71b997",
        color: "white",
        border: "1px solid #71b997",
      }}
      className="btn btn-success btn-sm"
      {...props}
    >
      Salvar
    </button>
  );
}

function ButtomComponentClear({ ...props }) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      style={{
        marginLeft: "10px",
        backgroundColor: "#6c6c6c",
        color: "white",
        border: "1px solid #6c6c6c",
      }}
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
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          backgroundColor: "#9d5d5d",
          color: "white",
          border: "1px solid #9d5d5d",
        }}
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
