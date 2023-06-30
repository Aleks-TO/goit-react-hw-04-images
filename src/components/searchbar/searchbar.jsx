import React, { useState } from 'react';
import css from './searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name);
  };

  const handleInput = event => {
    setName(event.currentTarget.value.toLowerCase().trim());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          onChange={handleInput}
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
