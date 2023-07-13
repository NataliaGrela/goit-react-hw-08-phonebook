import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ContactItem = ({ onDelete, id, number, name }) => {
  return (
    
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
