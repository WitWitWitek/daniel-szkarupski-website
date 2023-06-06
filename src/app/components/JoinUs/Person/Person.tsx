import styles from './Person.module.scss';

export default function Person({ teamMember }: { teamMember: Person }) {
  return (
    <div className={styles.person}>
      <div
        className={styles.person__thumbnail}
        style={{ backgroundImage: `url(${teamMember.thumbnail})` }}
      />
      <div className={styles.person__name}>
        {teamMember.name.split(' ').map((el) => <p>{el}</p>)}
      </div>
      <div className={styles.person__position}>
        <span>{teamMember.position}</span>
      </div>
    </div>
  );
}
