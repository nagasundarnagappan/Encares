import React, { useState } from "react";
import validator from 'validator'
import { Outlet, Link } from "react-router-dom"
function Login() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    
    if (validator.isEmail(email)) {
      setEmailError(
        <Link to="/home">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login to Encares</button>
        </Link>
        )
      } else {
        setEmailError('Enter valid Email!')
      }
    }
     return(
      <div class="bg-yellow-400   ">
<div class="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
    <div class="text-slate-100 items-center">
    <img src={'Yel.jpeg'}/>
    </div>

    <div class="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
        <div class="w-3/4 mb-6">
<input type="email" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300" placeholder='Login with Email' id="email" onChange={(e) => validateEmail(e)} />
        </div>
        <div class="w-3/4 mb-12">
  <div class="lg:mb-8 flex justify-center">
<div style={{
  fontWeight: 'bold',
  color: 'white',
}}>{emailError}</div>
        </div>
    </div>
</div>
</div>
</div>
);
};
export default Login;
