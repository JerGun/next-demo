import React, {useState} from 'react';
import styles from "../../styles/Home.module.css";
const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(formInput);
    axios.post('link', formInput).then(
      //doSomething
    )
  };

  return (
    <div className={styles.container}>
      <p>Create Next App</p>
      <p>Maprang</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setFormInput({ ...formInput, email: e.target.value });
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setFormInput({ ...formInput, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
