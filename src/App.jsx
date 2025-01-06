import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Tourism from "./pages/Tourism";
import Hotels from "./pages/Hotels";
import data from "./data/data"
import CardDetailsPage from "./pages/CardDetailsPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Food" element={<Food data={data}/>} />
        <Route path="/Tourism" element={<Tourism data={data}/>} />
        <Route path="/Hotels" element={<Hotels data={data}/>} />
        <Route path="/details" element={<CardDetailsPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
