function ModalComponentConfirm({ ...props }) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Deseja realmente deletar ?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Não
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                data-bs-dismiss="modal"
                {...props}
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponentConfirm;
