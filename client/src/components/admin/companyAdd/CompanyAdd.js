import {React, useState} from 'react'
import "./CompanyAdd.css"
import Navbar from '../../Navbar/Navbar'
import { addCompany } from '../../../services/Api'
import { useNavigate } from 'react-router-dom'

const CompanyAdd = () => {

  const navigate = useNavigate();
  const initial = {
    name: "",
    desc: "",
    type: "",
  };

  const [data , setData] = useState(initial);

  const handleChange = (e) => {
    setData({...data , [e.target.name]: e.target.value});
  }

  const handleCompanyAdd = async () =>{
    const company = await addCompany(data);
    
    if(company)
      
      navigate("/viewcompanies");
  }

  return (
    <>
      <Navbar />
      <div className='company-add-container'>
          <div className='heading'>
              Add New Company
          </div>

          <div className ='container'>
            <div className = 'left'>
              
              <div className="company name">
                  <input type="text" name="name" placeholder="Company Name" onChange={(e) => (handleChange(e))}/>
              </div>

              <div className="company desc">
                  <input type="text" name="desc" placeholder="Company Description" onChange={(e) => (handleChange(e))}/>
              </div>
            </div>

            <div className = 'right'>
              <div className="company type">
                  <input type="text" name="type" placeholder="Company Type" onChange={(e) => (handleChange(e))}/>
              </div>
            </div>
          </div>

          <button className="add-btn" onClick={handleCompanyAdd} >Add</button>
      </div>
    </>
  )
  
}
  
  export default CompanyAdd;
