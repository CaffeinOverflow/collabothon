import React from "react";
import "./modal.css"

type Props = {
  handleClose: () => void;
  show: boolean;
}

const Modal: React.FC<Props> = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal-main" onClick={e => e.stopPropagation()}>
        <section className="modal-nav">
          <p
            style={{
              float: "right",
              margin: "0 5px 0 0",
              cursor: "pointer",
              fontSize: "10px",
            }}
            onClick={handleClose}
          >
            X
          </p>
        </section>
        <section className="modal-body">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;