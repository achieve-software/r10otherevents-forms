import { useState } from "react";
const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const handleData = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <form>
      <h1 className="text-danger display-6 text-center">FORMS</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name: <span>{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleData}
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
          onChange={handleData}
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
          onChange={handleData}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};
export default FormWithObject;
