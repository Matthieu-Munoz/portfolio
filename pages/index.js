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
        <meta property="og:description" content={displayedData.seo.descShort} />
        <meta name="twitter:description" content={displayedData.seo.descShort} />

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
