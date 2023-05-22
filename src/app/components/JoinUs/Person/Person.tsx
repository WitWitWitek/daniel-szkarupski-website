type Props = {}

import styles from './Person.module.scss'

export default function Person({}: Props) {
  return (
    <div className={styles["person"]}>
        <div className={styles["person__thumbnail"]}></div>
        <div className={styles["person__position"]}>
            Position
        </div>
        <div className={styles["person__name"]}>
            Name NameNameName
        </div>
    </div>
  )
}