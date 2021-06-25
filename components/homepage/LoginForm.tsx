import Image from "next/image";
import styled from "styled-components";
import github_login from "../../public/images/Github_login.png";
import { signIn } from "next-auth/client";
import { Button } from "@/components/ui/Button";

const LoginForm = () => {
  return (
    <StyledSection>
      <div className="card">
        <h2>Damit ist alles perfekt gelagert</h2>
        <Image
          src={github_login}
          alt="Github Login"
          layout="responsive"
          width="641,67"
          height="617,5"
        ></Image>
        <Button large onClick={() => signIn()} type="button">
          Einloggen mit Github
        </Button>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: rgb(140, 222, 239);
  background: linear-gradient(
    45deg,
    rgba(140, 222, 239, 1) 0%,
    rgba(198, 181, 247, 1) 100%
  );
  display: grid;
  place-items: center;
  height: 100vh;

  .card {
    padding: 4rem;
    background: var(--primary-50);
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 100vw;
      height: 100vh;
      border-radius: 0px;
    }
  }
`;

export default LoginForm;
