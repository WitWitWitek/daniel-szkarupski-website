import Link from "next/link"
import styles from '../Navbars.module.scss'

export default function NavLarge() {
  return (
    <div className={styles["navbar__wrapper"]}>
      <div>
        <Link href='/' className={styles["navbar__link"]} >O mnie</Link>
        <Link href='/' className={styles["navbar__link"]} >Blog</Link>
        <a href='/#social-media' className={styles["navbar__link"]} >Social Media</a>
        <a href='/#kontakt' className={styles["navbar__link"]} >Kontakt</a>
      </div>
      <div>
        <Link href='/' className={styles["navbar__join-btn"]}>Dołącz do nas</Link>
        <Link href='/' className={styles["navbar__support-btn"]}>Wesprzyj</Link>
      </div>
    </div>
  )
}