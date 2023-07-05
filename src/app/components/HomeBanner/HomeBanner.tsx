'use client';

import Image from 'next/image';
import { Variants, motion } from 'framer-motion';
import { FaShieldAlt, FaPuzzlePiece, FaUserCheck } from 'react-icons/fa';
import styles from './HomeBanner.module.scss';

const container = {
  whileInView: (i = 1) => ({
    opacity: [0, 1],
    transition: { staggerChildren: 0.2, delayChildren: 0.2 * i },
  }),
};

const child = {
  whileInView: {
    opacity: [0, 1],
    y: [20, 0],
    transition: { duration: 0.8 },
  },
};

const homeImage: Variants = {
  whileInView: {
    opacity: [0, 1],
    transition: { duration: 1 },
  },
};

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
      <motion.div variants={container} animate="whileInView" className={styles.banner__header}>
        <motion.h1 variants={child}>
          Daniel
          <br /> Szkarupski
        </motion.h1>
        <motion.div variants={child} className={styles['banner__paragraphs-container']}>
          <p>
            <FaShieldAlt /> Bezpieczeństwo
          </p>
          <p>
            <FaUserCheck /> Skuteczność
          </p>
          <p>
            <FaPuzzlePiece /> Tożsamość
          </p>
        </motion.div>
        <motion.div variants={child} className={styles['banner__btn-container']}>
          <a href="https://wesprzyjrn.pl/" className={styles['banner__support-btn']}>
            Wesprzyj
          </a>
          <a href="/#dolacz-do-nas" className={styles['banner__join-btn']}>
            Dołącz do nas
          </a>
        </motion.div>
      </motion.div>
      <motion.div variants={homeImage} animate="whileInView" className={styles.banner__image}>
        <Image src="/daniel-cover.png" alt="Daniel Szkarupski zdjęcie promocyjne" fill />
      </motion.div>
    </section>
  );
}
