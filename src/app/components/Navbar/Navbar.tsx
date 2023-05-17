"use client"

import Link from "next/link";
import { Fade } from "hamburger-react";
import styles from './Navbars.module.scss'
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <nav className={styles["navbar"]}>
        <div className={styles["navbar__logo"]}>
            <Link href='/'>Daniel Szkarupski</Link>
        </div>
        <button className={styles["navbar__burger-btn"]} type="button">
            <Fade toggled={isMenuOpen} toggle={setMenuOpen} color="#FFF" />
        </button>
        <div className={styles["navbar__wrapper"]}>
          <div>
              <Link href='/'>O mnie</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Social Media</Link>
          </div>
          <div>
              <Link href='/' className={styles.joinBtn}>Dołącz do nas</Link>
              <Link href='/' className={styles.supportBtn}>Wesprzyj</Link>
          </div>
        </div>
    </nav>
  )
}