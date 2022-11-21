import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {MainContainer} from "./SignUpStyle";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function signUp(event) {
    event.preventDefault();
    if (form.password === form.confirmPassword) {
      const request = axios
        .post("http://localhost:5000/sign-up", {
          username: form.username,
          email: form.email,
          password: form.password,
        })
        .catch((err) => alert(err.response.data.message));

      request.then(() => {
        navigate("/");
      });
    } else alert("Please confirm the correct password");
  }

  return (
    <MainContainer>
      <h1>MyWallet</h1>
      <form onSubmit={signUp}>
        <input
          placeholder="Nome"
          name="username"
          value={form.username}
          onChange={handleForm}
        />
        <input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <button>Cadastrar</button>
      </form>
      <Link to="/">
        <h2>Já tem uma conta? Entre agora!</h2>
      </Link>
    </MainContainer>
  );
}