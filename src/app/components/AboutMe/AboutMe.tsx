import styles from './AboutMe.module.scss'

export default function AboutMe() {
  return (
    <section className={styles["about-me"]}>
        <h2 id='o-mnie'>O mnie</h2>
        <div className={styles["about-me__text"]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur maxime at, accusantium omnis architecto vero tenetur, cum perferendis, <span> assumenda ipsam fugit velit magni error provident quidem</span>. Blanditiis, molestias? Ut eligendi aliquam cumque doloremque ratione sit. Officia commodi enim deleniti sunt accusamus culpa exercitationem minima, amet quia ratione magnam perferendis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Sequi</span> aspernatur maxime at, accusantium omnis architecto vero tenetur, cum perferendis, assumenda ipsam fugit velit magni error provident quidem. Blanditiis, molestias? Ut eligendi aliquam cumque doloremque ratione sit. Officia commodi enim deleniti sunt accusamus culpa exercitationem minima, amet quia ratione magnam perferendis?</p>
            <p><span>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Sequi aspernatur maxime at, accusantium omnis architecto vero tenetur, cum perferendis, assumenda ipsam fugit velit magni error provident quidem. Blanditiis, molestias? Ut eligendi aliquam cumque doloremque ratione sit. Officia commodi enim deleniti sunt accusamus culpa exercitationem minima, amet quia ratione magnam perferendis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur maxime at, accusantium omnis architecto vero tenetur, cum perferendis, assumenda ipsam fugit velit magni error provident quidem. Blanditiis, molestias? Ut eligendi aliquam cumque doloremque ratione sit. <span>Officia commodi enim deleniti sunt accusamus culpa exercitationem minima, amet quia ratione magnam perferendis?</span></p>
        </div>
    </section>
  )
}