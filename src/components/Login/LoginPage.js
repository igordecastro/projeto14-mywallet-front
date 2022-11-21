import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MainContainer } from "./LoginStyle";

export default function LoginPage({ setToken, setUsername }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function login(event) {
    event.preventDefault();

    const request = axios
      .post("http://localhost:5000/sign-in", {
        email: form.email,
        password: form.password,
      })
      .catch((err) => alert(err.response.data.message));

    request.then((res) => {
      console.log(res);
      setToken(res.data.token);
      setUsername(res.data.username);
      navigate("/home");
    });
  }

  return (
    <MainContainer>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <input
          placeholder="E-mail"
          name="email"
          onChange={handleForm}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleForm}
          value={form.password}
        />
        <button>Entrar</button>
      </form>
      <Link to="/sign-up">
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </MainContainer>
  );
}
