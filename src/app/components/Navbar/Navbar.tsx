import Link from "next/link";

// styles
import styles from './Navbars.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div>
            <Link href='/'>Daniel Szkarupski</Link>
        </div>
        <div>
            <Link href='/'>O mnie</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>Social Media</Link>
        </div>
        <div>
            <Link href='/' className={styles.joinBtn}>Dołącz do nas</Link>
            <Link href='/' className={styles.supportBtn}>Wesprzyj</Link>
        </div>
    </nav>
  )
}