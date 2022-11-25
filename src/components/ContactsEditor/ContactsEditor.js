import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactsEditor/ContactsEditor.module.css';

const ContactsEditor = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (onSubmit({ name, number }) !== 1) {
      reset();
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form__add} onSubmit={handleSubmit}>
      <div className={css.form__field}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className={css.form__field}>
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          onChange={handleChange}
          value={number}
        />
      </div>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactsEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsEditor;
