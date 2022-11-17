// import { Container } from "react-bootstrap";
import "./Login.css";
import logo from "../assets/logo.png";
import icon1 from "../assets/icon-login.png";

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
          <div className="circle-login">
            <img src={icon1} alt="" className="icon-login"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;