import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Logo from "../assets/logo.png";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { authDataContext } from "../context/authContext";
import { adminDataContext } from "../context/AdminContext";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl } = useContext(authDataContext);
  const { adminData, getAdmin } = useContext(adminDataContext);

  const navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);

      // ✅ Call getData from context
      await getAdmin();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      {/* Header */}
      <div className="w-full h-[80px] flex items-center pt-3 justify-start px-[30px] gap-[10px] cursor-pointer">
        <img className="w-[50px]" src={Logo} alt="BuyCart Logo" />
        <h1 className="text-[22px] font-sans">BuyCart</h1>
      </div>

      {/* Title */}
      <div className="w-full h-[100px] flex items-center justify-center flex-col mb-2 gap-[10px]">
        <span className="text-[25px] font-semibold">Login</span>
        <span className="text-[16px]">Welcome to BuyCart</span>
      </div>

      {/* Form */}
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center relative justify-center gap-[15px]">
            {/* Email */}
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            {/* Password */}
            <input
              type={show ? "text" : "password"}
              className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            {/* Show/Hide Password */}
            {show ? (
              <IoEyeOutline
                className="h-[20px] w-[20px] bottom-[50%] absolute cursor-pointer right-[7%]"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="h-[20px] w-[20px] bottom-[50%] absolute cursor-pointer right-[7%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
