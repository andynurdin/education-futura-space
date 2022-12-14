import "./Login.css";
import logo from "../assets/logo.png";
import icon1 from "../assets/icon-login.png";
import { Button } from "react-bootstrap";
const Login = () => {
  return (
    <div className="login d-flex">
      <div className="login-left w-50">
        <div>
          <img src={logo} alt="" className="img-login" />
          <div className="title-login">
            <h1>User Login</h1>
            <p>Welcome To The Website</p>
          </div>
        </div>
      </div>
      <div className="login-right w-50">
        <div className="card-login">
          <div>
            <img src={icon1} alt="" className="icon-login" />
          </div>
          <div>
            <h2>Username</h2>
            <input
              type="text"
              className="form-login"
              id="inputUsername"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              type="password"
              className="form-login"
              id="inputPassword"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn">
            <Button variant="dark" size="lm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
