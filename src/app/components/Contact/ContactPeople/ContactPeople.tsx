import { FaPhone, FaUser } from 'react-icons/fa';
import styles from './ContactPeople.module.scss';

const contactData: {
  name: string;
  position: string;
  phone: string;
}[] = [
  {
    name: 'Bartłomiej Czuchnowski',
    position: 'Rzecznik prasowy',
    phone: '531 457 163',
  },
  {
    name: 'Łukasz Hałaszkiewicz',
    position: 'Koordynator ds. wsparcia sympatyków',
    phone: '516 377 027',
  },
];

export default function ContactPeople() {
  return (
    <div className={styles['contact-people']}>
      {contactData.map((person) => (
        <div className={styles['contact-people__person']}>
          <p>
            <FaUser /> {person.name}
          </p>
          <p>
            <i>{person.position}</i>
          </p>
          <p>
            <strong>
              <FaPhone /> <a href={`tel:${person.phone}`}>{person.phone}</a>
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
}
