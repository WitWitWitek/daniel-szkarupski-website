'use client';

import React, { useEffect, useState } from 'react';
import useContactForm from '../../hooks/useContactForm';
import styles from './ContactForm.module.scss';

export interface FormContent {
  name: string,
  email: string,
  subject: string,
  text: string,
}

type InputName = 'name' | 'email' | 'subject' | 'text';

export default function ContactForm() {
  const [formContent, setFormContent] = useState<FormContent>({
    name: '', email: '', subject: '', text: '',
  });
  const {
    sendContactForm, isLoading, isSuccess, isError,
  } = useContactForm();
  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as InputName;
    setFormContent((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const onFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendContactForm(formContent);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormContent({
        name: '', email: '', subject: '', text: '',
      });
    }
  }, [isSuccess]);

  return (
    <section className={styles['contact-form']}>
      <h2 id="kontakt" className={styles['contact-form__heading']}>Formularz kontaktowy</h2>
      <form onSubmit={onFormSubmission} className={styles['contact-form__form']}>
        <label htmlFor="name" className={styles['contact-form__label']}>
          Imię i nazwisko:
          <input
            id="name"
            name="name"
            type="text"
            maxLength={50}
            onChange={onFormChange}
            value={formContent.name}
            className={styles['contact-form__input']}
            required
          />
        </label>
        <label htmlFor="email" className={styles['contact-form__label']}>
          E-mail:
          <input
            id="email"
            name="email"
            type="email"
            maxLength={50}
            onChange={onFormChange}
            value={formContent.email}
            className={styles['contact-form__input']}
            required
          />
        </label>

        <label htmlFor="subject" className={styles['contact-form__label']}>
          Temat:
          <input
            id="subject"
            name="subject"
            type="text"
            maxLength={50}
            onChange={onFormChange}
            value={formContent.subject}
            className={styles['contact-form__input']}
            required
          />
        </label>

        <label htmlFor="text" className={styles['contact-form__label']}>
          Opis:
          <textarea
            id="text"
            name="text"
            maxLength={500}
            onChange={onFormChange}
            value={formContent.text}
            className={styles['contact-form__textarea']}
            required
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className={styles['contact-form__button']}
        >
          {!isLoading ? 'Wyślij' : 'Wysyłam...'}
        </button>
        {isSuccess && !isError && (
          <div className={styles['contact-form__success']}>
            <p>✓</p>
            <div>Wysłano poprawnie</div>
          </div>
        )}
        {!isSuccess && isError && (
          <div className={styles['contact-form__error']}>
            <p>X</p>
            <div>Błąd wysyłania forumlarza</div>
          </div>
        )}
      </form>
    </section>
  );
}
