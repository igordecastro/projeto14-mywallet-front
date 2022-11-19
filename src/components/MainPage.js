import styled from "styled-components";
import logout from "../assets/images/exit.svg";
import plus from "../assets/images/add-circle.svg";
import minus from "../assets/images/remove-circle.svg";

export default function MainPage() {
  const wallet = [];
  return (
    <MainContainer>
      <div>
        <h1>Olá, fulano</h1>
        <img src={logout} alt="Logout" />
      </div>
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
        <div />
      )}
      <span>
        <img src={plus} alt="add income" />
        <h2>Nova entrada</h2>
      </span>
      <span>
        <img src={minus} alt="add income" />
        <h2>Nova saída</h2>
      </span>
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
    img {
      width: 26px;
      height: 27px;
    }
  }
  div:nth-child(2) {
    position: absolute;
    width: 326px;
    height: 446px;
    left: 25px;
    top: 78px;
    background: #ffffff;
    border-radius: 5px;
  }
  span {
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
`;
