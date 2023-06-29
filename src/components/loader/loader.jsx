import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="150"
        width="150"
        radius="25"
        color="#4658be"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
