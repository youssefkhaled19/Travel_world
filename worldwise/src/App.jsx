import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayOut from "./pages/AppLayOut";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
const Base_url = "http://localhost:9000/cities";

export default function App() {
  const [cites, setCites] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(function () {
    async function fetchcities() {
      try {
        const res = await fetch(`${Base_url}`);
        const data = await res.json();
        setCites(data);
      } catch {
        alert("something went wrong loading the data");
      } finally {
        SetIsLoading(false);
      }
    }
    fetchcities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayOut />}>
          <Route
            index
            element={<CityList cites={cites} isLoading={isLoading} />}
          />
          <Route path="cities" element={<p>cites</p>} />
          <Route path="countries" element={<p>contrary</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>

        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
