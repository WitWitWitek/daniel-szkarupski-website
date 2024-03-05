import styles from './HomeSectionLayout.module.scss';

type Props = {
  headingTitle: string;
  sectionId: string;
  mode: 'white' | 'blue';
  children: React.ReactNode;
};

export default function HomeSectionLayout({ headingTitle, sectionId, mode, children }: Props) {
  const sectionColorMode = `section-${mode}`;
  return (
    <section className={`${styles['section-wrapper']} ${styles[sectionColorMode]}`}>
      <h2 id={sectionId}>{headingTitle}</h2>
      {children}
    </section>
  );
}
