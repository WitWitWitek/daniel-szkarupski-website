import styles from './Person.module.scss';

export default function Person() {
  return (
    <div className={styles.person}>
      <div className={styles.person__thumbnail} />
      <div className={styles.person__position}>
        Position
      </div>
      <div className={styles.person__name}>
        Name NameNameName
      </div>
    </div>
  );
}
