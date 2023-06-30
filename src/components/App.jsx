import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar/searchbar';
import { fetchPictures } from 'API/api';
import ImageGallery from './imageGallery/imageGallery';
import Loader from './loader/loader';
import { Button } from './button/button';
import css from './App.module.css';

export function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getPhoto(name, page);
  }, [name, page]);

  async function getPhoto(name, page) {
    if (!name) {
      return;
    }
    setIsLoading(true);
    try {
      const { hits, totalHits } = await fetchPictures(name, page);
      if (hits === 0) {
        setIsEmpty(true);
      }
      setImages(prevImg => [...prevImg, ...hits]);
      setIsEmpty(false);
      setIsVisible(Math.ceil(totalHits / 12));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = value => {
    if (value === name) {
      return alert('Please write another name');
    }
    setImages([]);
    setName(value);
    setPage(1);
    setIsEmpty(true);
    setIsVisible(false);
    setError(null);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit} />
      {isEmpty && <p className={css.text}>Sorry, there are no images...</p>}
      {error && <p className={css.text}>Sorry, {error}</p>}
      <ImageGallery images={images} />
      {isVisible && (isLoading ? <Loader /> : <Button onClick={onLoadMore} />)}
    </div>
  );
}
