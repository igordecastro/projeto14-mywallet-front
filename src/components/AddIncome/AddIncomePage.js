import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./AddIncomeStyle.js";

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