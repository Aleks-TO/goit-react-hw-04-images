import React, { Component } from 'react';
import css from './searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  // reset = () => {
  //   this.setState({ name: '' });
  // };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    this.props.onSubmit(name);
    this.reset();
  };

  handleInput = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase().trim() });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
