import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      {/** biome-ignore lint/a11y/useButtonType: supress for example */}
      <button formAction={login}>Log in</button>
      {/** biome-ignore lint/a11y/useButtonType: supgress for example */}
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
