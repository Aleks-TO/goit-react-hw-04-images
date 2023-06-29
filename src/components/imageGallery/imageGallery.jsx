import css from './imageGallery.module.css';
import { ImageGalleryItem } from '../imageGalleryItem/imageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images &&
        images.map(el => (
          <ImageGalleryItem
            key={el.id}
            smallImg={el.webformatURL}
            description={el.tags}
            bigImg={el.largeImageURL}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
