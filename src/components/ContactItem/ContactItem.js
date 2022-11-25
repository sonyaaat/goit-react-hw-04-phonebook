import css from "../ContactItem/ContactItem.module.css"
import PropTypes from 'prop-types';
const ContactItem=({id,name,number,onDelete})=>{
return(
    <li className={css.item}>
         <p className={css.name}>{name}: </p>
         <p className={css.number}>{number}</p>
         <button className={css.button} type="button" onClick={()=>onDelete(id)}>Delete</button>
    </li>
)
}
export default ContactItem
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
