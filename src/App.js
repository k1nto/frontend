import './App.css';

function App() {

  const handleClick = (e) => {
    const log = e.target.login.value;
    const pass = e.target.password.value;
    // eslint-disable-next-line no-useless-concat
    alert("Your login: " +log + "\n" + "Your password: " +pass)
  }
  return (
    <div align="center" justify="center"className="container">
      <form onSubmit={handleClick}>
      Login:
      <input type="text" name="login" placeholder="Login"></input>
      <p>Password: 
        <input type="text" name="password" placeholder="Password"></input>
      </p>
      <p>'
        <button onClick={handleClick}>Log in</button>
      </p>
      </form>
    </div>
  );
}

export default App;