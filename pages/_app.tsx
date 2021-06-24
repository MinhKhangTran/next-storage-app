import { global } from "@/styles/GlobalStyles";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <style jsx global>
        {global}
      </style>
    </Provider>
  );
}

export default MyApp;
