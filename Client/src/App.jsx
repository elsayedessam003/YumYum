import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Restaurants from "./pages/restaurants/Restaurants.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UserProvider from "./context/UserProvider.jsx";
import PropTypes from "prop-types";
import "./global.css";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
import FilterProvider from "./context/FilterProvider.jsx";
import UserPage from "./pages/user/UserPage.jsx";

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
        <FilterProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:city"
              element={
                <RestaurantLayout>
                  <Restaurants />
                </RestaurantLayout>
              }
            />
            <Route
              path={"/:city/:restaurantId"}
              element={
                <RestaurantLayout>
                  <Restaurant />
                </RestaurantLayout>
              }
            />
            <Route
              path="/user"
              element={
                <RestaurantLayout>
                  <UserPage />
                </RestaurantLayout>
              }
            />
          </Routes>
        </FilterProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
