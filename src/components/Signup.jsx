import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup =()=>{
  const [form,setForm] = useState({name :"", email:"",password:""});
  const navigate = useNavigate()
  const handleOnChange = (key,value)=>{
    setForm(prev=>({...prev,[key]:value}))
  }
  const handleSubmit =async()=>{
    await axios.post("http://localhost:8000/api/auth/signup",form)
  navigate("/login")
  }
  return(
    <div class ="rootdiv">
      <form class="form-signin" action="/" method="post">
      <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
      <input type="text" onChange={(e)=>handleOnChange("name",e.target.value)} name="name" class="form-control top" placeholder="Name" required autofocus/>
      <input type="email" onChange={(e)=>handleOnChange("email",e.target.value)} name="email" class="form-control middle" placeholder="Email address" required/>
      <input type="password"  onChange={(e)=>handleOnChange("password",e.target.value)} name = "password" class="form-control bottom" placeholder="Password" required/>
      <button onClick={handleSubmit} class="btn btn-md btn-primary btn-block" type="submit">Sign Up</button>
      <p class="mt-5 mb-3 text-muted">&copy; Babu</p>
    </form>
    </div>
    
  )
}

export default Signup;



