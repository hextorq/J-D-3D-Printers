
import { Link } from "react-router-dom";

export const Login = () => (
  <main>
    <section aria-labelledby="login-title">
      <Link to="/" aria-label="Back to JD 3D Printers home">
        JD<span>.</span>
      </Link>

      <p>WELCOME BACK</p>
      <h1 id="login-title">Sign in to your account</h1>

      <form>
        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          type="email"
          placeholder="you@example.com"
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="Enter your password"
        />

        <label>
          <input type="checkbox" />
          <span>Remember me</span>
        </label>

        <button type="button">Log In</button>

        <Link
          to="/home"
          className="guest-button">
          Continue as Guest
        </Link>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Create one</Link>
      </p>
    </section>
  </main>
);

export default Login;
