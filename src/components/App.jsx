import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import { fetchPictures } from 'API/api';
import ImageGallery from './imageGallery/imageGallery';
import Loader from './loader/loader';
import { Button } from './button/button';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    name: '',
    isEmpty: true,
    isVisible: false,
    error: null,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name || prevState.page !== page) {
      this.getPhoto(name, page);
    }
  }

  onSubmit = value => {
    if (value === this.state.name) {
      return alert('Please write another name');
    }
    this.setState({
      images: [],
      name: value,
      page: 1,
      isEmpty: true,
      isVisible: false,
      error: null,
    });
  };

  getPhoto = async (name, page) => {
    if (!name) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await fetchPictures(name, page);
      if (hits === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isEmpty: false,
        isVisible: Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isEmpty, isVisible, error, isLoading } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {isEmpty && <p className={css.text}>Sorry, there are no images...</p>}
        {error && <p className={css.text}>Sorry, {error}</p>}
        <ImageGallery images={images} />
        {isVisible &&
          (isLoading ? <Loader /> : <Button onClick={this.onLoadMore} />)}
      </div>
    );
  }
}
