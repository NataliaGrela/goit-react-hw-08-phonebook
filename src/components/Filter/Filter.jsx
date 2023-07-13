import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChangeFilter }) => {
  const handleChange = e => {
    const { value } = e.currentTarget;
    onChangeFilter(value);
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name</label>
      <input className={css.input} onChange={handleChange}></input>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
