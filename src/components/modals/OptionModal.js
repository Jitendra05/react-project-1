import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => (
   <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    closeTimeoutMS={300}
    className="modal"
   >
       <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
       <button 
        onClick={props.clearSelectedOption}
        className="button"
       >
       ok
       </button>
   </ReactModal>
);

export default OptionModal;