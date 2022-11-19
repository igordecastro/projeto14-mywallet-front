// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// function handleForm(e) {

// }

export default function signUpPage() {
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
  return (
    <MainContainer>
      <h1>MyWallet</h1>
      <form>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30%;
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
