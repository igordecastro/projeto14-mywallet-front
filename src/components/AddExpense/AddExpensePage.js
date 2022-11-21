import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./ExpensePageStyle";

export default function AddExpensePage({ token }) {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function addExpense(event) {
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
          type: "expense",
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
        <h1>Nova saída</h1>
      </div>
      <form onSubmit={addExpense}>
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
        <button>Salvar saída</button>
      </form>
    </MainContainer>
  );
}