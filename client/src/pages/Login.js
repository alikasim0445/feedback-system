import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login flex flex-col" onSubmit={handleSubmit}>
      <h3 className="text-center font-bold">Log In</h3>

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="password"
      />

      <button disabled={isLoading} className="">
        Log in
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
