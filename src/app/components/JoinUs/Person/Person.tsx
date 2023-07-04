'use client';

import { motion, Variants } from 'framer-motion';
import styles from './Person.module.scss';

const thumbnailVariants: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const childVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Person({ teamMember }: { teamMember: Person }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className={styles.person}
    >
      <motion.div
        variants={thumbnailVariants}
        className={styles.person__thumbnail}
        style={{ backgroundImage: `url(${teamMember.thumbnail})` }}
      />
      <motion.div variants={childVariants} className={styles.person__name}>
        {teamMember.name.split(' ').map((el) => (
          <p>{el}</p>
        ))}
      </motion.div>
      <motion.div variants={childVariants} className={styles.person__position}>
        <span>{teamMember.position}</span>
      </motion.div>
    </motion.div>
  );
}
