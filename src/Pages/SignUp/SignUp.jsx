import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import  { AuthContext } from "../../Providers/AuthCont";


const SignUp = () => {
  const {signUp}=useContext(AuthContext)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    signUp(data.email,data.password)
    .then(result=>{
      const logedUser=result.user;
      console.log(logedUser);
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" {...register("name",{required:true})} name="name" placeholder="Name" className="input input-bordered" required />
          {errors.name && <span className="text-red-500">Name field is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",  { required: true })} name="email" placeholder="email" className="input input-bordered" required />
          {errors.email && <span className="text-red-500">Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true,minLength:6, maxLength: 20 } )} name="password" placeholder="password" className="input input-bordered" required />
          {errors.password && <span className="text-red-500">Password field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        <p className="text-center"><small>Already Have an Account? <Link to='/signUp'><p className="text-blue-400" >LogIn</p></Link></small></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;