import Link from 'next/link';
import React from 'react';
import styles from './NotFound.module.scss';

type Props = {
  title: string,
  url: string,
  linkContent: string,
};

export default function NotFound({ title, url, linkContent }: Props) {
  return (
    <div className={styles['not-found__container']}>
      <h1 className={styles['not-found__title']}>{title}</h1>
      <Link className={styles['not-found__link']} href={url}>{linkContent}</Link>
    </div>
  );
}
