// make a _app.tsx file in the pages folder

import { AppProps } from "next/app";
import DefaultLayout from "../components/default-layout";
import "../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
