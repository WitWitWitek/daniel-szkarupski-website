import FacebookIcon from '@/app/assets/icons/facebook';
import TwitterIcon from '@/app/assets/icons/twitter';
import styles from './SocialMedia.module.scss';

export default function SocialMedia() {
  return (
    <section className={styles['social-media']}>
      <h2 id="social-media">Social media</h2>
      <div className={styles['social-media__container']}>
        <div className={styles['social-media__wrapper']}>
          <div className={`${styles['social-media__icon']} ${styles['social-media__icon-facebook']}`}>
            <FacebookIcon />
          </div>
          <div className={styles['social-media__facebook']}>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/szkarupski"
              data-tabs="timeline"
              data-small-header="true"
              data-adapt-container-width
              data-hide-cover="true"
              data-show-facepile="true"
              data-width="500"
            >
              <blockquote
                cite="https://www.facebook.com/szkarupski"
                className="fb-xfbml-parse-ignore"
              >
                <a
                  href="https://www.facebook.com/szkarupski"
                >
                  Daniel Szkarupski - Ruch Narodowy/Konfederacja.
                </a>
              </blockquote>
            </div>
          </div>
        </div>
        <div className={styles['social-media__wrapper']}>
          <div className={`${styles['social-media__icon']} ${styles['social-media__icon-twitter']}`}>
            <TwitterIcon />
          </div>
          <div className={styles['social-media__twitter']}>
            <a
              className="twitter-timeline"
              href="https://twitter.com/szkarupski?ref_src=twsrc%5Etfw"
            >
              Tweets by szkarupski
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
