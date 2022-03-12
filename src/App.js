
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div style={{display: "flex"}}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
    >
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
}

export default App;
