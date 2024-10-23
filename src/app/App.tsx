import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../pages/products/presentation/Products";
import Index from "../components/layout/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
