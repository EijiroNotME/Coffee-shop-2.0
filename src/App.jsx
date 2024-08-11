import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="min-h-[calc(100vh-96px)] z-0">
          <Outlet />
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default App;
