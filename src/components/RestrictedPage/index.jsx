import "./index.css";
function Teste({ isLoggedIn, user, Logout, Login }) {
  return (
    <div className="main">
      {isLoggedIn ? (
        <div className="container">
          <p className="open">Bem vindo {user}</p>
          <button className="button-open" onClick={Logout}>
            {" "}
            Sair
          </button>
        </div>
      ) : (
        <div className="container">
          <p className="locked">Você não pode acessar essa página</p>
          <button className="button-locked" onClick={Login}>
            Entrar
          </button>
        </div>
      )}
    </div>
  );
}
export default Teste;
