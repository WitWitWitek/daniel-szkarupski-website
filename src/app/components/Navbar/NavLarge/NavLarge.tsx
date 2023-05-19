import Link from "next/link"
import styles from '../Navbars.module.scss'

export default function NavLarge() {
  return (
    <div className={styles["navbar__wrapper"]}>
          <div>
              <Link href='/' className={styles["navbar__link"]} >O mnie</Link>
              <Link href='/' className={styles["navbar__link"]} >Blog</Link>
              <Link href='/' className={styles["navbar__link"]} >Social Media</Link>
          </div>
          <div>
              <Link href='/' className={styles["navbar__join-btn"]}>Dołącz do nas</Link>
              <Link href='/' className={styles["navbar__support-btn"]}>Wesprzyj</Link>
          </div>
    </div>
  )
}