import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Restaurants from "./pages/restaurants/Restaurants.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UserProvider from "./context/UserProvider.jsx";
import PropTypes from "prop-types";
import "./global.css";

RestaurantLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function RestaurantLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/restaurants"
            element={
              <RestaurantLayout>
                <Restaurants />
              </RestaurantLayout>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
