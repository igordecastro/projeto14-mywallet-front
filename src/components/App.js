import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";
import MainPage from "./Main/MainPage";
import GlobalStyle from "../assets/GlobalStyle.js"
import AddExpensePage from "./AddExpense/AddExpensePage";
import AddIncomePage from "./AddIncome/AddIncomePage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} setUsername={setUsername} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<MainPage token={token} username={username}/>} />
        <Route path="/add-expense" element={<AddExpensePage token={token}/>} />
        <Route path="/add-income" element={<AddIncomePage token={token}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
