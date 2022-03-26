import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const [form,setForm] = useState({name :"", email:"",password:""});
  const navigate = useNavigate()
  const handleOnChange = (key,value)=>{
    setForm(prev=>({...prev,[key]:value}))
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const result = await axios.post("http://localhost:8000/api/auth/login",form)
    if(result.status==200){
      const token = result.data.token
      localStorage.setItem("token",token)
      navigate("/table")
    }
  else{
    alert(result.data.message)
  }
  }
  return(
    <div class="rootdiv">
      <form class="form-signin" onSubmit={handleSubmit}>
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <input type="email" onChange={(e)=>handleOnChange("email",e.target.value)} name="email" class="form-control middle" placeholder="Email address" required autoFocus/>
      <input type="password"  onChange={(e)=>handleOnChange("password",e.target.value)} name = "password" class="form-control bottom" placeholder="Password" required/>
      <button  class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      <p class="mt-5 mb-3 text-muted">&copy; Babu</p>
    </form>
    </div>
    
  )
}
 export default Login;







