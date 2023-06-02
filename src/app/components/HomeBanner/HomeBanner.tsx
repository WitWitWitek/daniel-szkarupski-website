import Image from 'next/image';
import styles from './HomeBanner.module.scss';

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__header}>
        <h1>
          Daniel
          <br />
          {' '}
          Szkarupski
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores optio eius aliquid temporibus.
        </p>
        <div className={styles['banner__btn-container']}>
          <a href="https://wesprzyjrn.pl/" className={styles['banner__support-btn']}>Wesprzyj</a>
          <a href="/#dolacz-do-nas" className={styles['banner__join-btn']}>Dołącz do nas</a>
        </div>
      </div>
      <div className={styles.banner__image}>
        <Image src="/daniel-cover.png" alt="Daniel Szkarupski zdjęcie promocyjne" fill />
      </div>
    </section>
  );
}
