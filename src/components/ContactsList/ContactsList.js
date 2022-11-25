import PropTypes from 'prop-types';
import css from "../ContactsList/ContactsList.module.css"
import ContactItem from 'components/ContactItem/ContactItem';
const ContactsList=({contacts,onDelete,items})=>{
    return(
        contacts.length===0 && items.length!==0?<h2 className={css.notify}>There isn`t such contact</h2>:
        <ul className={css.list}>
            {contacts.map(({id,name,number})=>
            <ContactItem key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}/>
            )}
        </ul>)
}
export default ContactsList

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDelete: PropTypes.func.isRequired,
  };