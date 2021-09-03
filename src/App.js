import "./App.css";
import { useState } from "react";
import Teste from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const user = "Daniel";
  function Logout() {
    setisLoggedIn(false);
  }
  function Login() {
    setisLoggedIn(true);
  }
  return (
    <div className="App">
      <Teste
        isLoggedIn={isLoggedIn}
        user={user}
        Logout={Logout}
        Login={Login}
      />
    </div>
  );
}

export default App;
