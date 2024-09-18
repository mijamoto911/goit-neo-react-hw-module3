import css from './Contact.module.css';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.info}>
        <div className={css.iconContainer}>
          <FaUserAlt className={css.icon} />
          <FaPhoneAlt className={css.icon} />
        </div>
        <div className={css.textContainer}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
