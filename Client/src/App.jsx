import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import "./global.css";
import UserProvider from "./context/UserProvider.jsx";
import Restaurants from "./pages/restaurants/Restaurants.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
        <Navbar></Navbar>
        <Routes>
          <Route path={"/restaurants"} element={<Restaurants />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
