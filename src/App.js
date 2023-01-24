import { useState } from "react";
import SideBar from "./scenes/global";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="app">
      <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </div>
  );
}

export default App;
