import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
      console.log(res)
      setToken(res.data.token);
      setUsername(res.data.username)
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

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
    height: 218px;
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