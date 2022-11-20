import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import MainPage from "./MainPage";
import GlobalStyle from "../assets/GlobalStyle.js"
import AddExpensePage from "./AddExpensePage";
import AddIncomePage from "./AddIncomePage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path="/add-income" element={<AddIncomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
