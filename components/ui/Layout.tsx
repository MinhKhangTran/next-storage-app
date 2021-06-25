import styled from "styled-components";
import Head from "next/head";
import { Button } from "@/components/ui/Button";

const Layout = ({
  children,
  title = "Storage App",
  description = "Eine Lager App",
  keywords = "Lager, App",
  Heading,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  Heading: string;
}) => {
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>
      <nav>
        <h1>{Heading}</h1>
        <Button outline>Logout</Button>
      </nav>
      {children}
    </StyledLayout>
  );
};
const StyledLayout = styled.section`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
  nav {
    margin: 4rem 0;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--grey-300);
  }
  h1 {
    color: var(--primary-500);
    margin-bottom: 0;
  }
`;

export default Layout;
