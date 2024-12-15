import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { apis } from "../store/apis";
import { useEffect, useState } from "react";
import { Alert } from "reactstrap";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { loading, error, user } = useSelector((state) => state.login);
  const {
    loading: registering,
    user: registeredUser,
    message,
    error: registerError,
  } = useSelector((state) => state.register);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const [registerUser, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    age: "",
  });

  const handleRegisterChange = (e) => {
    setUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  // Handle successful registration
  useEffect(() => {
    if (message && registeredUser) {
      localStorage.setItem("useremail", registerUser.email);
      setTimeout(() => {
        dispatch(apis.resetAll());
        navigate("/");
      }, 2000);
    }
    if (registerError) {
      setTimeout(() => {
        dispatch(apis.resetAll());
      }, 2000);
    }
  }, [message, registeredUser, registerError]);

  // Handle successful login
  useEffect(() => {
    if (user && user.role) {
      setTimeout(() => {
        dispatch(apis.resetAll());
        setLoading(false);
        navigate("/dashboard");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="containerAll">
      <div className="container1">
        <input type="checkbox" id="flip" />
        <div className="cover1">
          <div className="front1">
            <img
              className="frontImg1"
              src="https://www.alueducation.com/wp-content/uploads/2019/10/ALU-Tutoo-team.png"
              alt=""
            />
            <div className="text1">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back1">
            <img
              className="backImg1"
              src="https://img.freepik.com/premium-photo/smiling-african-american-man-sitting-desk-working-laptop-taking-notes-notebook-black-male-studying-online_116547-26697.jpg?w=2000"
              alt=""
            />
            <div className="text1">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms1">
          <div className="form-content1">
            {/* Login Form */}
            <div className="login-form1">
              <div className="title1">Login</div>
              <form>
                <div className="input-boxes1">
                  <div className="input-box1">
                    <i className="fas fa-envelope"></i>
                    <input
                      onChange={handleChange}
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box1">
                    <i className="fas fa-lock"></i>
                    <input
                      onChange={handleChange}
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text1">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button1 input-box1">
                    <input
                      type="submit"
                      value={loading || isLoading ? "Loading..." : "Login"}
                      onClick={(e) => {
                        e.preventDefault();
                        setLoading(true);
                        dispatch(apis.login(loginData));
                      }}
                    />
                  </div>
                  {error && (
                    <Alert color="danger" isOpen={!!error}>
                      {error}
                    </Alert>
                  )}
                  <div className="text1 sign-up-text1">
                    Don't have an account? <label htmlFor="flip">Signup now</label>
                  </div>
                </div>
              </form>
            </div>

            {/* Signup Form */}
            <div className="signup-form1">
              <div className="title1">Signup</div>
              <form>
                <div className="input-boxes1">
                  <div className="input-box1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="input-box1">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      required
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="input-box1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="input-box1">
                    <input
                      type="number"
                      name="age"
                      placeholder="Enter your age"
                      required
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="button1 input-box1">
                    <input
                      type="submit"
                      value={registering ? "Registering..." : "Submit"}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                          apis.register({ ...registerUser, role: "student" })
                        );
                      }}
                    />
                  </div>
                  {registerError && (
                    <Alert color="danger" isOpen={!!registerError}>
                      {registerError}
                    </Alert>
                  )}
                  {message && (
                    <Alert color="success" isOpen={!!message}>
                      {message}
                    </Alert>
                  )}
                  <div className="text1 sign-up-text1">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
