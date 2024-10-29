import React from "react";
import Modal from "react-modal";

const Resume = ({ isOpen, onRequestClose }) => {
  return (
    <div className="Resume">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Resume Modal"
        ariaHideApp={false} // to avoid warning in development
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2>My Resume</h2>
          <iframe 
          src="/resume.pdf" 
          width="100%" 
          height="600px"
          title="Resume"
        />
          <button onClick={onRequestClose} className="close-btn">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Resume;
