import styles from './Contact.module.scss';
import ContactForm from './ContactForm/ContactForm';
import HomeSectionLayout from '../HomeSectionLayout/HomeSectionLayout';

export default function Contact() {
  return (
    <HomeSectionLayout headingTitle="Kontakt" sectionId="kontakt" mode="white">
      <p className={styles['contact-form__description']}>
        Jeżeli posiadasz cenne uwagi dotyczące polityki krajowej i lokalnej, chcesz się zaangażować, skontaktuj się ze
        mną poprzez <strong>formularz kontaktowy</strong>:
      </p>
      <ContactForm />
    </HomeSectionLayout>
  );
}
