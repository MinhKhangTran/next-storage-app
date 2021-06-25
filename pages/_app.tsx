import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
