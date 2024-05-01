import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
return ( 
    <>
    <Header />
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg" alt="bck"></img>
    </div>
    <form className="w-3/12 absolute rounded-md m-36 p-6 bg-black mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl p-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800" /> )}
        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-800" />
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800" />
        <button className="p-4 my-2 rounded-md bg-red-700 w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="p-4">{isSignIn ? "New to NetFlix?" : "Already Registered" } <b className="cursor-pointer" onClick={toggleSignIn}>{isSignIn ?  "Sign Up Now" : "Sign In Now"}</b></p>
    </form>
    </>
);
}
export default Login;