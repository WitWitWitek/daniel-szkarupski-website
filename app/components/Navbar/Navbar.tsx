'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbars.module.scss';
import NavSmall from './NavSmall/NavSmall';
import NavLarge from './NavLarge/NavLarge';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <div className={styles['navbar__logo-container']}>
          <Image src="/flag.svg" alt="polish national flag" fill />
        </div>
        <p className={styles['navbar__logo-text']}>
          Daniel
          {' '}
          <br />
          {' '}
          Szkarupski
        </p>
      </Link>
      <NavSmall />
      <NavLarge />
    </nav>
  );
}
