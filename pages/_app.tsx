import { global } from "@/styles/GlobalStyles";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {global}
      </style>
    </>
  );
}

export default MyApp;
