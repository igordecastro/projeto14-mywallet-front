import logout from "../../assets/images/exit.svg";
import plus from "../../assets/images/add-circle.svg";
import minus from "../../assets/images/remove-circle.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ValuesContainer, MainContainer } from "./MainStyle";


export default function MainPage({ token, username }) {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState([]);
  let balance = 0;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:5000/wallet", config)
      .then((res) => setWallet(res.data));
  }, [token]);

  wallet.map(transaction => {
    if(transaction.type === "expense") {
      balance -= transaction.value
    } else balance += transaction.value
  })

  return (
    <MainContainer>
      <span>
        <h1>Olá, {username}</h1>
        <img src={logout} alt="Logout" />
      </span>
      {wallet?.length === 0 ? (
        <div
          style={{
            color: "#868686",
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "23px",
          }}
        >
          <p
            style={{
              margin: "150px 80px 60px 80px",
              textAlign: "center",
              width: "50%",
            }}
          >
            Não há registros de entrada ou saída
          </p>
        </div>
      ) : (
        <ValuesContainer>
          <ul>
            {wallet?.map((transaction) => (
              <li>
                <div>{transaction.date}</div>
                <div>{transaction.description}</div>
                {transaction.type === "expense" ? (
                  <div style={{ color: "#C70000" }}>{transaction.value}</div>
                ) : (
                  <div style={{ color: "#03AC00" }}>{transaction.value}</div>
                )}
              </li>
            ))}
          </ul>
          <h1>SALDO</h1>
          {balance > 0 ? <h2 style={{ color: "#03AC00" }}>{Math.round(balance)}</h2> : <h2 style={{ color: "#C70000" }}>{Math.round(balance)}</h2>}
        </ValuesContainer>
      )}
      <span onClick={() => navigate("/add-income")}>
        <img src={plus} alt="add income" />
        <h2>Nova entrada</h2>
      </span>
      <span onClick={() => navigate("/add-expense")}>
        <img src={minus} alt="add income" />
        <h2>Nova saída</h2>
      </span>
    </MainContainer>
  );
}