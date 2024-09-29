import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import "./global.css";
import UserProvider from "./context/UserProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
