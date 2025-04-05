import Link from "next/link";
import styles from "../Navbars.module.scss";

export default function NavLarge() {
  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__container}>
        <div className={styles["navbar__container--links"]}>
          <a href="/#o-mnie" className={styles.navbar__link}>
            O mnie
          </a>
          <Link href="/blog" className={styles.navbar__link}>
            Blog
          </Link>
          <a href="/#social-media" className={styles.navbar__link}>
            Social Media
          </a>
          <a href="/#kontakt" className={styles.navbar__link}>
            Kontakt
          </a>
        </div>
        <div className={styles["navbar__container--btns"]}>
          <a
            href="https://wspieram.ruch-narodowy.pl/"
            className={styles["navbar__support-btn"]}
            target="_blank"
            rel="noreferrer"
          >
            Wesprzyj
          </a>
        </div>
      </div>
    </div>
  );
}
