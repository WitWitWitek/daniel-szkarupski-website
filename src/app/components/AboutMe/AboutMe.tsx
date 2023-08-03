/* eslint-disable react/no-danger */
import HomeSectionLayout from '../HomeSectionLayout/HomeSectionLayout';
import styles from './AboutMe.module.scss';

export default function AboutMe({ content }: { content: string }) {
  return (
    <HomeSectionLayout headingTitle="O mnie" sectionId="o-mnie" mode="white">
      <div className={styles['about-me__text']}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </HomeSectionLayout>
  );
}
