import Head from "next/head";
import { useInView } from "react-intersection-observer";
// Local | React-Redux
import { HomeIntro } from "../components/HomeIntro";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
import { useAppContext } from "../context/state";
import { data } from "../data/data";
import { Contact } from "../components/Contact";

function Home() {
  const { app } = useAppContext();

  const displayedData = data[0][app.language];
  const { ref: contactRef, inView: contactInView } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#fef0e7" />
        <link rel="canonical" href="https://matthieu-munoz.fr" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#537970" />
        <meta name="apple-mobile-web-app-title" content="Matthieu Munoz" />
        <meta name="application-name" content="Matthieu Munoz" />
        <meta name="msapplication-TileColor" content="#fef0e7" />
        <meta name="theme-color" content="#fef0e7" />
        <meta property="og:title" content="Matthieu Munoz" />
        <meta property="og:description" content={displayedData.seo.descShort} />
        <meta property="og:image" content="https://matthieu-munoz.fr/socials.png" />
        <meta property="og:url" content="https://matthieu-munoz.fr" />
        <meta name="twitter:title" content="Matthieu Munoz" />
        <meta name="twitter:description" content={displayedData.seo.descShort} />
        <meta name="twitter:url" content="https://matthieu-munoz.fr/socials.png" />
        <meta name="twitter:card" content="summary" />
        <title>Matthieu Munoz - Portfolio</title>
        <meta name="description" content={displayedData.seo.desc} />
      </Head>
      <section className="section section--home fp-auto-height-responsive">
        <HomeIntro data={displayedData.home} />
      </section>
      <section className="section section--skills fp-auto-height-responsive">
        <Skills data={displayedData.skills} />
      </section>
      <section className="section section--projects fp-auto-height-responsive" ref={projectRef}>
        {projectInView && <Projects data={displayedData.projects} />}
      </section>
      <section className="section section--contact fp-auto-height-responsive" ref={contactRef}>
        {contactInView && <Contact data={displayedData.contact} />}
      </section>
      <section className="section fp-auto-height footer">
        <Footer data={displayedData.footer} />
      </section>
    </>
  );
}

export default Home;