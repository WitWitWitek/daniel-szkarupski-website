/* eslint-disable react/no-danger */
import getAboutMePage from '@/app/lib/aboutMePage';
import styles from './AboutMe.module.scss';

export default async function AboutMe() {
  const aboutMe = getAboutMePage();
  const aboutMeData = await aboutMe;
  return (
    <section className={styles['about-me']}>
      <h2 id="o-mnie">O mnie</h2>
      <div className={styles['about-me__text']}>
        <article dangerouslySetInnerHTML={{ __html: aboutMeData.html }} />
      </div>
    </section>
  );
}
