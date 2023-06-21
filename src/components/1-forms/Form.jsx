import { useState } from "react";
const Form = () => {
  const [username, setUserName] = useState("noname");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleUsername = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
  username:${username}
  email:${email}
  password:${password}
  `);
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-danger display-6 text-center">FORMS</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name: <span>{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleUsername}
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span>{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};
export default Form;
