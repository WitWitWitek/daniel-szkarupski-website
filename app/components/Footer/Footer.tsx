import Link from "next/link";
import styles from "./Footer.module.scss";
import SocialMediaTiles from "../SocialMedia/SocialMediaTiles/SocialMediaTiles";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles["footer__user-container"]}>
          <h2 className={styles["footer__user-title"]}>daniel-szkarupski.pl</h2>
          <p className={styles["footer__user-description"]}>
            Zachęcam do śledzenia moich profili na mediach społecznościowych.
            Znajdziecie tam Państwo najświeższe informacje dotyczące mojej
            działalności.
          </p>
          <div className={styles["footer__social-media"]}>
            <SocialMediaTiles />
          </div>
        </div>
        <div className={styles.footer__menu}>
          <div className={styles["footer__menu-container"]}>
            <h3>Ważne linki</h3>
            <a href="https://konfederacja.pl/" target="_blank" rel="noreferrer">
              Konfederacja
            </a>
            <a
              href="https://ruch-narodowy.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Ruch Narodowy
            </a>
          </div>
          <div className={styles["footer__menu-container"]}>
            <h3>Mapa Strony</h3>
            <a href="/#o-mnie">O mnie</a>
            <Link href="/blog">Blog</Link>
            <a href="/#social-media">Social Media</a>
            <a href="/#kontakt">Kontakt</a>
          </div>
        </div>
      </div>
      <div className={styles.footer__date}>
        <hr />
        <p>
          <i>Materiał Wyborczy KW Konfedracja Wolność i Niepodległość.</i>
        </p>
        <p>Wszelkie prawa zastrzeżone. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
