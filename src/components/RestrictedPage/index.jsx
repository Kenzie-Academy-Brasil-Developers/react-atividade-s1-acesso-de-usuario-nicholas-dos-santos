function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Bem vindo {user}!</h2>
          <button className="btn" onClick={Logout}>
            {" "}
            Logout{" "}
          </button>
        </div>
      ) : (
        <div>
          <h2>Você não pode acessar essa página</h2>
          <button className="btn" onClick={Login}>
            {" "}
            Login{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default RestrictedPage;
