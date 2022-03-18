import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import useToken from "./components/useToken";


function App() {
  const [token, setToken] = useToken();

  return (
    <div style={{display: "flex"}}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          margin: "1rem"
        }}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          {
            token ?
            <li>
              <Link to="logout">Logout</Link>
            </li> :
            <li>
              <Link to="login">Login</Link>
            </li>
          }
        </ul>
      </nav>
      <Outlet context={[token, setToken]} />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: localStorage.getItem('email')
//     };
//   }

//   render() {

//     return (
//       <div style={{display: "flex"}}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem"
//         }}
//       >
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           {
//             this.state.email ?
//             <li>
//               <a href="/logout">Logout</a>
//             </li> :
//             <li>
//               <a href="/login">Login</a>
//             </li>
//           }
//         </ul>
//       </nav>
//       <Outlet />
//       </div>
//     );
//   }
// }

export default App;
