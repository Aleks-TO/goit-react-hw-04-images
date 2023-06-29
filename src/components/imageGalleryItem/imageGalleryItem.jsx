import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import { Modal } from '../modal/modal';

export const ImageGalleryItem = ({ smallImg, description, bigImg }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={smallImg}
        alt={description}
        className={css.ImageGalleryItemImage}
        onClick={openModal}
      />
      {showModal && <Modal onClose={closeModal} url={bigImg} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bigUrl: PropTypes.string.isRequired,
};
