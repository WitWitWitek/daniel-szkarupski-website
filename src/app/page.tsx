import AboutMe from './components/AboutMe/AboutMe'
import ContactForm from './components/ContactForm/ContactForm'
import HomeBanner from './components/HomeBanner/HomeBanner'
import JoinUs from './components/JoinUs/JoinUs'
import SocialMedia from './components/SocialMedia/SocialMedia'
export default function Home() {
  return (
    <>
      <HomeBanner />
      <ContactForm />
      <SocialMedia />
      <AboutMe />
      <JoinUs />
    </>
  )
}
