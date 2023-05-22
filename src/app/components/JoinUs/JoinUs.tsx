import styles from './JoinUs.module.scss'
import Person from './Person/Person'

export default function JoinUs() {
  return (
    <section className={styles["join-us"]}>
        <h2 id='dolacz-do-nas'>Dołącz<br /> do nas!</h2>
        <div className={styles["join-us__wrapper"]}>
          {[1,2,3,4,5].map(person => (
            <Person key={person} />
          ))}
        </div>
    </section>
  )
}