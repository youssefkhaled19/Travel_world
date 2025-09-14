import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayOut from "./pages/AppLayOut";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { useEffect, useState } from "react";
import Form from "./components/Form";
const Base_url = "http://localhost:9000/cities";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(Base_url);
        const data = await res.json();
        setCities(data); // ✅ fixed
      } catch {
        alert("Something went wrong loading the data");
      } finally {
        setIsLoading(false); // ✅ fixed (capitalization)
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route index element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="app" element={<AppLayOut />}>
          <Route
            index
            element={<Navigate replace to="cities" />} // ✅ fixed
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
