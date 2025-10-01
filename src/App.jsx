import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Tourism from "./pages/Tourism";
import Hotels from "./pages/Hotels";
import data from "./data/data";
import CardDetailsPage from "./pages/CardDetailsPage";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food data={data} />} />
      <Route path="/tourism" element={<Tourism data={data} />} />
      <Route path="/hotels" element={<Hotels data={data} />} />
      <Route path="/details/:category/:id" element={<CardDetailsPage data={data}/>} />
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
