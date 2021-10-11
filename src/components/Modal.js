import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, in?
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
