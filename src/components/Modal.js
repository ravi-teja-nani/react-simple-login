import React from 'react';
import ReactDOM from 'react-dom'

function Modal({isModalOn, SetIsModalOn}){

  return ReactDOM.createPortal(<div style = {{display :isModalOn ? "block":""}} className="modal-conatiner">
     <button onClick = {() => SetIsModalOn(false)}> close</button>
  </div>, document.getElementById("portal"))
}

export default Modal