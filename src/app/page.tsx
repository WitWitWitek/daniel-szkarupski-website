import styles from './page.module.scss'

export default function Home() {
  return (
    <section className={styles.main}>
      <div>
        <h1 className={styles.heading}>Daniel<br /> Szkarupski</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio eius aliquid temporibus soluta veniam ducimus ea dolor rem perferendis.</p>
        <div>
          <button className={styles.supportBtn}>Wesprzyj</button>
          <button className={styles.joinBtn}>Dołącz do nas</button>
        </div>
      </div>
      <div className={styles.circle}>
      </div>
    </section>
  )
}
