'use client';

import styles from './BlogPage.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h2 className={styles['blog-page__title']}>Something went wrong!</h2>
      <button
        onClick={
            () => reset()
          }
        type="button"
        className={styles['blog-page__error-btn']}
      >
        Try again
      </button>
    </>
  );
}
