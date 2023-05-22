import Link from "next/link"
import styles from '../Navbars.module.scss'

export default function NavLarge() {
  return (
    <div className={styles["navbar__wrapper"]}>
      <div>
        <a href='/#o-mnie' className={styles["navbar__link"]} >O mnie</a>
        <Link href='/' className={styles["navbar__link"]} >Blog</Link>
        <a href='/#social-media' className={styles["navbar__link"]} >Social Media</a>
        <a href='/#kontakt' className={styles["navbar__link"]} >Kontakt</a>
      </div>
      <div>
        <Link href='/' className={styles["navbar__join-btn"]}>Dołącz do nas</Link>
        <a href='https://wesprzyjrn.pl/' className={styles["navbar__support-btn"]}>Wesprzyj</a>
      </div>
    </div>
  )
}