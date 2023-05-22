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
      <div className={`${styles["navbar__backdrop"]} ${isMenuOpen ? styles["navbar__backdrop-active"] : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`${styles["navbar__menu"]} ${isMenuOpen ? styles["navbar__menu-active"] : ''}`}>
        <a href='/#o-mnie' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>O mnie</a>
        <Link href='/' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>Blog</Link>
        <a href='/#social-media' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>Social Media</a>
        <a href='/#kontakt' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>Kontakt</a>
        <Link href='/' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>Dołącz do nas</Link>
        <a href='https://wesprzyjrn.pl/' className={styles["navbar__menu-link"]} onClick={() => setMenuOpen(false)}>Wesprzyj</a>
      </div>
    </>
  )
}