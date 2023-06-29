import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal } from '../modal/modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { smallImg, description, bigImg } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={smallImg}
          alt={description}
          className={css.ImageGalleryItemImage}
          onClick={this.openModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.closeModal} url={bigImg} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bigUrl: PropTypes.string.isRequired,
};
