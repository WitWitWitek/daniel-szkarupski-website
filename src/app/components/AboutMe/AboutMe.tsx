/* eslint-disable react/no-danger */
import { PortableText } from '@portabletext/react';
import HomeSectionLayout from '../HomeSectionLayout/HomeSectionLayout';
import styles from './AboutMe.module.scss';

export const revalidate = 120;

export default function AboutMe({ content }: IAboutMeSection) {
  return (
    <HomeSectionLayout headingTitle="O mnie" sectionId="o-mnie" mode="white">
      <div className={styles['about-me__text']}>
        <PortableText value={content} />
      </div>
    </HomeSectionLayout>
  );
}
