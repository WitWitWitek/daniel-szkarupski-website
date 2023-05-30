import FacebookIcon from '@/app/assets/icons/facebook';
import TwitterIcon from '@/app/assets/icons/twitter';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles['footer__user-container']}>
          <h2 className={styles['footer__user-title']}>Daniel Szkarupski</h2>
          <p className={styles['footer__user-description']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Autem labore id et quae dolores amet.
          </p>
          <div className={styles['footer__social-media']}>
            <Link href="https://www.facebook.com/szkarupski/" className={styles['footer__social-media-link']}>
              <FacebookIcon />
            </Link>
            <Link href="https://twitter.com/szkarupski" className={styles['footer__social-media-link']}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <div className={styles.footer__menu}>
          <div className={styles['footer__menu-container']}>
            <h3>Ważne linki</h3>
            <a href="/konfederacja">konfederacja</a>
            <a href="/ruch-narodowy">ruch narodowy</a>
          </div>
          <div className={styles['footer__menu-container']}>
            <h3>Mapa Strony</h3>
            <a href="/konfederacja">O mnie</a>
            <a href="/ruch-narodowy">Kontakt</a>
            <a href="/ruch-narodowy">Blog</a>
            <a href="/ruch-narodowy">Blog</a>
          </div>
        </div>
      </div>
      <div className={styles.footer__date}>
        <hr />
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
