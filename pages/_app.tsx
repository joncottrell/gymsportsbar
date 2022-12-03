import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GYM Sportsbar - America&#39;s Most Popular Gay Sports Bar</title>
        <meta
          name="Description"
          content="New York City's ORIGINAL Gay Sports Bar"
        />
        <meta
          name="Keywords"
          content="GYM Sportsbar, Gay Sports Bar, New York, Los Angeles, Fort Lauderdale"
        />
        <meta name="Distribution" content="global" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="30 Days" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
