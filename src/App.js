import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import SideBar from "./scenes/global/Sidebar";
import { Topbar } from "./scenes/global/Topbar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="app">
      <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflowY: "scroll",
        }}
      >
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
