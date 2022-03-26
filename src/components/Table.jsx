import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

const Table = ()=>{
  // const [form,setForm] = useState({name :"", email:"",password:""});
   const navigate = useNavigate()
  // const handleOnChange = (key,value)=>{
  //   setForm(prev=>({...prev,[key]:value}))
  // }
  if(localStorage.getItem("token")==null){
    navigate("/login")
  }
  const [details,setDetails] = useState([]);
  const [input,setInput] = useState("United+Kingdom");
  const [modelDetail,setModelDetail] = useState({})
  useEffect(
    () => {getDetails()
    }, [])

  const getDetails =async()=>{
    const result = await axios.get(`http://universities.hipolabs.com/search?country=${input}`)
    console.log(result.data);
    setDetails(result.data)
  }
  return(
    <div>
      <Popup modelDetail={modelDetail}/>
      <div>
        <input onChange={e=>setInput(e.target.value)} type="text" name ="searchbox" />
        <button onClick={getDetails}>Search</button>
      </div>
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {details.map(detail=>{
      return (
        <tr data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>setModelDetail(detail)}> 
      <th scope="row">{detail.name}</th>
      <td>{detail.country}</td>
      <td>{detail.domains[0]}</td>
      <td>{detail.web_pages[0]}</td>
      </tr>
      )
    })}
    
  
  </tbody>
</table>
</div> )
}
 export default Table;







