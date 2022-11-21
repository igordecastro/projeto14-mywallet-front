import styled from "styled-components";

export const MainContainer = styled.div`
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
export const ValuesContainer = styled.div`
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