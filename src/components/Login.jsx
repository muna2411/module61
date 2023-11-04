import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.config";
import { useRef, useState } from "react";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [registerError , setRegisterError] = useState(" ");
    const [success,setSuccess]=useState(" ");
    const [showPass,setShowPass] = useState(false);
    const emailRef = useRef(null);

    const handleHeroRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

if(pass.length < 6){
    setRegisterError('password should be more than 6 character');
    return;
}
else if(! /[A-Z]/.test(pass)){
  setRegisterError('password should be at least one Uppercase letter');
  return;
}

        setRegisterError(" ");
        setSuccess(" ");
//login page er create er jaigai sign in er kaj korbo --
//signInWithEmailAndPassword(auth,email,pass)
//.then(    ........ 
// if(result.user.emailVerified)) {setSuccess("  ..")} 
//, .cathe()
        createUserWithEmailAndPassword(auth,email,pass)
        .then(result =>{
            console.log (result.user);
            setSuccess("successful")

            //email verification er kaj korbo ekhane
            //sendEmailVerification(result.user)
            //.then( () =>{ alert(....)}
        })
        
        .catch(error =>{
            console.log (error.user);
            setRegisterError(error.message);
        })
    }

     const handleForgetPass = () =>{
        const email = emailRef.current.value;
        if(!email){
          console.log('setmail');
          return;
        }
        sendPasswordResetEmail(auth,email)
        .then(result =>{
         alert("check your mail"),
         console.log (result.user);
      
      })
      .catch(error =>{
          console.log (error.user);
          
      })
     }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleHeroRegister} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                type="text" 
                placeholder="name" 
                name="name" 
                className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                type="email" 
                ref={emailRef} 
                placeholder="email" 
                name="email" 
                className="input input-bordered" required />
              </div>
              
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

              <div className="relative">
              <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                <span className="absolute top-[15px] " onClick={() => setShowPass (!showPass)}>
                  {
                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
              </div>


                <label className="label">
                  <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
          </div>
        </div>
      </div>
    );
};


export default Login;