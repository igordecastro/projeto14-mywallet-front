import styled from "styled-components";
import logout from "../assets/images/exit.svg";
import plus from "../assets/images/add-circle.svg";
import minus from "../assets/images/remove-circle.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

const MainContainer = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  font-family: "Raleway";
  font-weight: 400;
  span:first-child {
    margin: 24px;
    width: 88%;
    height: 11%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #ffffff;
    }
    img {
      width: 26px;
      height: 27px;
    }
  }
  span:nth-child(3),
  span:nth-child(4) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    background: #a328d6;
    border-radius: 5px;
    img {
      width: 21.88px;
      height: 21.88px;
      margin: 10px 0 0 10px;
    }
    h2 {
      margin: 32px 0 0 10px;
      width: 64px;
      height: 40px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
    }
  }
  span:nth-child(4) {
    position: absolute;
    left: 195px;
    top: 537px;
  }
  li {
    font-family: "Raleway";
    font-style: normal;
    display: flex;
    justify-content: space-between;
    height: 34px;
    overflow: scroll;
  }
  li div:first-child {
    width: 48px;
    height: 34px;
    margin-left: 12px;
    color: #c6c6c6;
  }

  li div:last-child {
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    left: 0;
  }
`;
const ValuesContainer = styled.div`
  position: absolute;
  width: 326px;
  height: 446px;
  left: 25px;
  top: 78px;
  background: #ffffff;
  border-radius: 5px;
  h1 {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
  h2 {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;
