
import { Link } from "react-router-dom";

export const Signup = () => (
  <main>
    <section aria-labelledby="signup-title">
      <Link to="/" aria-label="Back to JD 3D Printers home">
        JD<span>.</span>
      </Link>

      <p>JOIN THE STUDIO</p>
      <h1 id="signup-title">Create your account</h1>

      <form>
        <label htmlFor="signup-name">Name</label>
        <input id="signup-name" type="text" placeholder="Your name" />

        <label htmlFor="signup-email">Email address</label>
        <input id="signup-email" type="email" placeholder="you@example.com" />

        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" placeholder="Create a password" />

        <label htmlFor="signup-confirm-password">Confirm password</label>
        <input id="signup-confirm-password" type="password" placeholder="Repeat your password" />

        <button type="button">Create Account</button>
      </form>

      <p>
        <Link to="/">Continue browsing as a guest</Link>
      </p>
    </section>
  </main>
);

export default Signup;
