import MainContent from "./Components/MainContent";
import "./Styles/app.css"


function App() {
  return (
    <div className="app bg-slate-900" >
    <div className="left-panel bg-slate-800">
      {/* This is the empty box */}
    </div>
    <div className="right-panel ">
      <MainContent />
    </div>
  </div>
  );
}

export default App;
