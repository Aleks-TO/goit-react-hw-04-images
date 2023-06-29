import css from './modal.module.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return ReactDOM.createPortal(
      <>
        <div className={css.overlay} onClick={this.handleClick}>
          <div className={css.modal}>
            <img className={css.image} src={this.props.url} alt="" />
          </div>
        </div>
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
