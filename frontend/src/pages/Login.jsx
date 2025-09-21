import React, {useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { authDataContext } from "../context/authContext";
import {auth,provider} from "../../utils/Firebase"
import { signInWithPopup } from "firebase/auth";
import { userDataContext } from "../context/userContext";
function Login() {
  const [show,setShow] =useState(false);
  const [email,setEmail] = useState("");
    let {serverUrl} = useContext(authDataContext)
  let {getCurrentUser} = useContext(userDataContext)
    const [password,setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault()
    try{
   let result =   await axios.post(
  serverUrl + "/api/auth/login",
  {  email, password },
  { withCredentials: true }
);
console.log(result.data)
getCurrentUser()
navigate("/")
    }
    catch(error){
      console.log(error)
    }
    
  }
  
 const googleLogin = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    let user = response.user;
    let name = user.displayName;
    let email = user.email;

      const result = await axios.post(serverUrl + "/api/auth/googlelogin",{name,email},{withCredentials:true})
      console.log(result.data)
  } catch (error) {
    console.error("Google signup error:", error);
  }
};
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center pt-3  justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[50px]" src={Logo} alt="" />
        <h1 className="text-[22px] font-sans ">BuyCart</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col mb-2 gap-[10px]">
        <span className="text-[25px] font-semibold">Login</span>
        <span className="text-[16px]">
          welcome to BuyCart
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action="" onSubmit={handleLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer" onClick={googleLogin}>
            <img src={google} alt="" className="w-[20px]" onClick={googleLogin}/> Registration with
            Google
          </div>

          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

          <div className="w-[90%] h-[400px] flex flex-col items-center relative justify-center gap-[15px] ">
             
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)} value={email}
              required
            />
            <input
              type={show?"text":"password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password" onChange={(e)=>setPassword(e.target.value) } value={password}
              required
            />
          {  show&&<IoEyeOutline className="h-[20px] w-[20px]  bottom-[57%] absolute courser-pointer right-[7%]" onClick={()=>setShow(prev => !prev)}/>}
           {!show&&<IoEye className="h-[20px] w-[20px] bottom-[57%] absolute courser-pointer right-[7%]" onClick={()=>setShow(prev => !prev)}/> }
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Create Account
            </button>

            <p className="flex gap-[10px]">
              you have't any account
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Registration
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login