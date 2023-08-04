'use client';

import FacebookIcon from '@/app/assets/icons/facebook';
import InstagramIcon from '@/app/assets/icons/instagram';
import TikTokIcon from '@/app/assets/icons/tiktok';
import TwitterIcon from '@/app/assets/icons/twitter';
import { motion, Variants } from 'framer-motion';
import styles from './SocialMediaTiles.module.scss';

const linkContainer: Variants = {
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delayChildren: 2,
    },
  },
  offscreen: {
    opacity: 0,
  },
};

const linkVariants: Variants = {
  onscreen: {
    opacity: 1,
    x: 0,
  },
  offscreen: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

export default function SocialMediaTiles() {
  return (
    <motion.div variants={linkContainer} initial="offscreen" whileInView="onscreen" className={styles['social-media']}>
      <motion.a
        variants={linkVariants}
        initial="offscreen"
        whileInView="onscreen"
        href="https://www.facebook.com/szkarupski/"
        className={styles['social-media__link']}
        title="Facebook"
      >
        <FacebookIcon />
      </motion.a>
      <motion.a
        variants={linkVariants}
        initial="offscreen"
        whileInView="onscreen"
        href="https://twitter.com/szkarupski"
        className={styles['social-media__link']}
        title="Twitter"
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        variants={linkVariants}
        initial="offscreen"
        whileInView="onscreen"
        href="https://www.instagram.com/szkarupski_daniel/"
        className={styles['social-media__link']}
        title="Instagram"
      >
        <InstagramIcon />
      </motion.a>
      <motion.a
        variants={linkVariants}
        initial="offscreen"
        whileInView="onscreen"
        href="https://www.tiktok.com/@daniel.szkarupski"
        className={styles['social-media__link']}
        title="TikTok"
      >
        <TikTokIcon />
      </motion.a>
    </motion.div>
  );
}
