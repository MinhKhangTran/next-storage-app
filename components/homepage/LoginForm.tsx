import { global } from "@/styles/GlobalStyles";

const LoginForm = () => {
  return (
    <section>
      <div className="card">
        <h2>Damit ist alles perfekt gelagert</h2>
        {/* <form>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input id="username" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input id="password" />
          </div>
          <button type="submit">Einloggen mit Github (Icon)</button>
        </form> */}
        <button type="submit">Einloggen mit Github</button>
      </div>

      <style jsx>
        {`
          section {
            background: rgb(140, 222, 239);
            background: linear-gradient(
              45deg,
              rgba(140, 222, 239, 1) 0%,
              rgba(198, 181, 247, 1) 100%
            );
          }

          .form-control {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.75rem;
          }
          section {
            display: grid;
            place-items: center;
            height: 100vh;
          }
          .card {
            padding: 4rem;
            background: #dbfbff;
            border-radius: 20px;
          }
          h2 {
            margin-bottom: 2rem;
            font-size: 2.25rem;
          }
          button {
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: #20a8c6;
            border: none;
            border-radius: 0.375rem;
            width: 100%;
            color: white;
            font-size: 1.25rem;
          }
          label {
            font-size: 0.875rem;
            color: teal;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          input {
            border-radius: 5px;
            border: none;
            font-size: 1.25rem;
            padding: 0.25rem;
            border: solid 1px teal;
          }

          @media screen and (max-width: 768px) {
            .card {
              width: 100vw;
              height: 100vh;
            }
          }
        `}
      </style>
    </section>
  );
};

export default LoginForm;
