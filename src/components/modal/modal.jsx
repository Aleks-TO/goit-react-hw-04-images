import css from './modal.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, url }) => {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);



  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={css.overlay} onClick={handleClick}>
        <div className={css.modal}>
          <img className={css.image} src={url} alt="" />
        </div>
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
