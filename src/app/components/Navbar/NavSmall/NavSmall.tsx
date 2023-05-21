import React from 'react'
import { Fade } from 'hamburger-react'
import { useState } from 'react'
import styles from '../Navbars.module.scss'
import Link from 'next/link'

export default function NavSmall() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <>
      <button className={styles["navbar__burger-btn"]} type="button" onClick={() => setMenuOpen(prev => !prev)}>
        <Fade toggled={isMenuOpen} color={isMenuOpen ? '#0f2947' : '#ffffff'} />
      </button>
      <div className={`${styles["navbar__backdrop"]} ${isMenuOpen ? styles["navbar__backdrop-active"] : ''}`}></div>
      <div className={`${styles["navbar__menu"]} ${isMenuOpen ? styles["navbar__menu-active"] : ''}`}>
        <Link href='/' className={styles["navbar__menu-link"]}>O mnie</Link>
        <Link href='/' className={styles["navbar__menu-link"]}>Blog</Link>
        <a href='/#social-media' className={styles["navbar__menu-link"]}>Social Media</a>
        <a href='/#kontakt' className={styles["navbar__menu-link"]}>Kontakt</a>
        <Link href='/' className={styles["navbar__menu-link"]}>Dołącz do nas</Link>
        <Link href='/' className={styles["navbar__menu-link"]}>Wesprzyj</Link>
      </div>
    </>
  )
}