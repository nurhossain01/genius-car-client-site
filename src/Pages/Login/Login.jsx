import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {
  const { createUserLogin } = useContext(AuthContext);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUserLogin(email, password)
      .then(result => {
        const user = result.user;
       console.log(user);
         navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  };
 
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center w-2/3 mx-auto lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input onClick={() => setIsCheckBox(!isCheckBox)} type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                <label for="remember" className={`${isCheckBox ? "text-sm text-black" : "text-sm dark:text-gray-400"}`}>Remember me</label>
              </div>
              <a className="text-sm dark:text-gray-400" href="/">Forgot your password?</a>
            </div>
            <div className="form-control mt-6">
              <button disabled={!isCheckBox} type='submit' className="btn btn-primary">Login</button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
              <Link to='/signUp' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</Link>.
            </p>
            <SocialLogin></SocialLogin>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;