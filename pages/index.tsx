import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import LoginForm from "@/components/homepage/LoginForm";
import Head from "next/head";

const IndexPage = () => {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/inventar");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Storage App</title>
        <meta name="description" content="Eine Lager App"></meta>
        <meta name="keywords" content="Lager, App"></meta>
      </Head>
      <LoginForm />
    </>
  );
};

export default IndexPage;
