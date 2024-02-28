import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SocialMedia from './components/SocialMedia/SocialMedia';
import getAboutMePage from './lib/aboutMePage';

export default async function Home() {
  const aboutMe = getAboutMePage();
  const { html } = await aboutMe;
  return (
    <>
      <HomeBanner />
      <AboutMe content={html} />
      <SocialMedia />
      <Contact />
    </>
  );
}
