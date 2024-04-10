import "./App.css";
import Header from "./app/sections/Header";
import Footer from "./app/sections/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
