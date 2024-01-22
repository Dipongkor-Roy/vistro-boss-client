import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthCont";

const LogIn = () => {
  const user_captcha = useRef(null);
  const [disable, setDisable] = useState(true);
  const {logIn}=useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
  };
  const handleCaptcha = () => {

    const captchaValue=user_captcha.current.value; //important part

    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="captcha"
                ref={user_captcha}
                name="captcha"
                placeholder="Type The Captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-outline btn-xs mt-3"
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value={"Log In"}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
