import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    } else alert("Please confirm the correct password")
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

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  flex-direction: column;
  margin: auto;
  h1 {
    width: 147px;
    height: 50px;
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
  }
  form {
    height: 388px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    input {
      width: 326px;
      height: 58px;
    }
    input::placeholder {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
    button {
      width: 326px;
      height: 46px;
      background: #a328d6;
      border-radius: 5px;
      margin-bottom: 32px;
      cursor: pointer;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #ffffff;
    }
  }
  h2 {
    text-decoration: underline;
    height: 18px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
