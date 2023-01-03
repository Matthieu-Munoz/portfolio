import { AppWrapper } from "../context/state";
import Layout from "../components/layout";
import "../styles/globals.scss";
import "../styles/app.scss";
// pages
// components
import "../styles/components/header.scss";
import "../styles/components/socials.scss";
import "../styles/components/themetoggle.scss";
import "../styles/components/home.scss";
import "../styles/components/sectionTitle.scss";

export default function App({ Component, pageProps }) {
  return (
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
  );
}
