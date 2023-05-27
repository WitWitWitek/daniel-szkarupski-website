import styles from './BlogPage.module.scss';

export default function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles['blog-page']}>
      {children}
    </section>
  );
}
