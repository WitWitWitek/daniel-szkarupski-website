import ContactPeople from './ContactPeople/ContactPeople';
import styles from './Contact.module.scss';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
  return (
    <section className={styles['contact-form']}>
      <h2 id="kontakt" className={styles['contact-form__heading']}>
        Kontakt
      </h2>
      <p className={styles['contact-form__description']}>
        Skontaktuj się z nami poprzez <strong>telefon</strong>:
      </p>
      <ContactPeople />

      <p className={styles['contact-form__description']}>
        Lub poprzez <strong>formularz kontaktowy</strong>:
      </p>
      <ContactForm />
    </section>
  );
}
