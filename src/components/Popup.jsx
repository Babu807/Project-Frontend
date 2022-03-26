import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Popup =({modelDetail})=>{
  const [form,setForm] = useState({name :"", email:"",password:""});
  const navigate = useNavigate()
  const handleOnChange = (key,value)=>{
    setForm(prev=>({...prev,[key]:value}))
  }
  return(
    <div>


<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{modelDetail.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {modelDetail.name}
        <br />
        {modelDetail.country}
        <br/>
        {modelDetail.web_pages}
        <br />
        {modelDetail.domains}
        <br />
        {modelDetail.alpha_two_code}
        <br />
        {modelDetail["state-province"]}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  
  )
}

export default Popup;



