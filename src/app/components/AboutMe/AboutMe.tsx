/* eslint-disable react/no-danger */
import styles from './AboutMe.module.scss';

export default function AboutMe({ content }: { content: string }) {
  return (
    <section className={styles['about-me']}>
      <h2 id="o-mnie">O mnie</h2>
      <div className={styles['about-me__text']}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
}
