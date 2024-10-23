import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;
