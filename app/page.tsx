import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SocialMedia from './components/SocialMedia/SocialMedia';
import { getAboutMeSection } from './lib/sanityActions';

export default async function Home() {
  const { content } = await getAboutMeSection();

  return (
    <>
      <HomeBanner />
      {content && <AboutMe content={content} />}
      <SocialMedia />
      <Contact />
    </>
  );
}
