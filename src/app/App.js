import Navbar from "../layout/Navbar/Navbar";
import Timer from "../pages/Timer/Timer";

function App() {
  return (
    <div className="h-screen w-screen grid place-items-center bg-gradient-to-r from-slate-100 to bg-slate-300">
      <div className="app-container block items-center h-[900px] w-[900px]">
        <div className="navbar-container">
          <Navbar/>
        </div>
        <div className="main-container mt-8">
          <Timer/>
        </div>
      </div>
    </div>
  );
}

export default App;
