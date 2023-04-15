import Head from "next/head";
import { AppWrapper } from "../../context/state";
import Layout from "../../components/layout";
import "../styles/globals.scss";
import "../styles/app.scss";
// pages
// components
import "../styles/components/header.scss";
import "../styles/components/socials.scss";
import "../styles/components/themetoggle.scss";
import "../styles/components/sectionTitle.scss";
import "../styles/components/projectinfo.scss";
import "../styles/components/modal.scss";
import "../styles/components/card.scss";
import "../styles/components/field.scss";
import "../styles/components/home.scss";
import "../styles/components/skills.scss";
import "../styles/components/projects.scss";
import "../styles/components/contact.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
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
        <meta property="og:image" content="https://matthieu-munoz.fr/socials.png" />
        <meta property="og:url" content="https://matthieu-munoz.fr" />
        <meta name="twitter:title" content="Matthieu Munoz" />
        <meta name="twitter:url" content="https://matthieu-munoz.fr/socials.png" />
        <meta name="twitter:card" content="summary" />
        <title>Matthieu Munoz - Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}
