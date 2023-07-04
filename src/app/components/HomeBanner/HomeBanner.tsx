'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
      <motion.div variants={container} animate="whileInView" className={styles.banner__header}>
        <motion.h1 variants={child}>
          Daniel
          <br /> Szkarupski
        </motion.h1>
        <motion.p variants={child}>Bezpieczeństwo, Skuteczność, Tożsamość.</motion.p>
        <motion.div variants={child} className={styles['banner__btn-container']}>
          <a href="https://wesprzyjrn.pl/" className={styles['banner__support-btn']}>
            Wesprzyj
          </a>
          <a href="/#dolacz-do-nas" className={styles['banner__join-btn']}>
            Dołącz do nas
          </a>
        </motion.div>
      </motion.div>
      <div className={styles.banner__image}>
        <Image src="/daniel-cover.png" alt="Daniel Szkarupski zdjęcie promocyjne" fill />
      </div>
    </section>
  );
}
