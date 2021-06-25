import Image from "next/image";
import styled from "styled-components";
import github_login from "../../public/images/Github_login.png";
import { signIn } from "next-auth/client";

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
        <button onClick={() => signIn()} type="button">
          Einloggen mit Github
        </button>
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
  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: var(--primary-500);
    border: none;
    border-radius: 0.375rem;
    width: 100%;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    transition: var(--transtion);
    &:hover {
      background: var(--primary-600);
      color: var(--primary-50);
      box-shadow: var(--shadow-1);
    }
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
