import { AppWrapper } from "../context/state";
import Layout from "../components/layout";
import "../styles/globals.scss";
// pages
// components
import "../styles/components/header.scss";
import "../styles/components/socials.scss";
import "../styles/components/themetoggle.scss";

export default function App({ Component, pageProps }) {
  return (
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
  );
}
