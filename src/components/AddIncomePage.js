import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AddIncomePage({ token }) {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function addIncome(event) {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const request = axios
      .post(
        "http://localhost:5000/wallet",
        {
          value: value,
          description: description,
          type: "income",
        },
        config
      )
      .catch((err) => alert(err.response.data));

    request.then(() => {
      navigate("/home");
    });
  }

  return (
    <MainContainer>
      <div>
        <h1>Nova entrada</h1>
      </div>
      <form onSubmit={addIncome}>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Salvar entrada</button>
      </form>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  div:first-child {
    margin: 24px;
    width: 88%;
    height: 11%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #ffffff;
    }
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
`;
