import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Navbar />
      {router}
      <Footer />
    </>
  );
}

export default App;
