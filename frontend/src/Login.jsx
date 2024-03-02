import React, {useState} from "react";
function Login({loginSuccessful}){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(true);
    }

return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );

};

export default Login;