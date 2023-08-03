import ContactPeople from './ContactPeople/ContactPeople';
import styles from './Contact.module.scss';
import ContactForm from './ContactForm/ContactForm';
import HomeSectionLayout from '../HomeSectionLayout/HomeSectionLayout';

export default function Contact() {
  return (
    <HomeSectionLayout headingTitle="Kontakt" sectionId="kontakt" mode="white">
      <p className={styles['contact-form__description']}>
        Jeżeli interesujesz się bieżącą kampanią wyborczą, posiadasz cenne uwagi dotyczące polityki krajowej i lokalnej,
        chcesz się zaangażować, skontaktuj się z nami poprzez <strong>telefon</strong>:
      </p>
      <ContactPeople />

      <p className={styles['contact-form__description']}>
        Lub poprzez <strong>formularz kontaktowy</strong>:
      </p>
      <ContactForm />
    </HomeSectionLayout>
  );
}
