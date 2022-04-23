import {ReactChild, useEffect, useState} from 'react'
import "./CompanyUpdate.css"
import Navbar from '../../Navbar/Navbar'
import { getCompany, updateCompany } from '../../../services/Api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CompanyUpdate = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [data , setData] = useState({});
  
  useEffect(()=>{
      const getCom = async () => {
          const Com = await getCompany(id);
          // console.log(Com.data[0]);
          setData(Com.data[0]);
      }
      getCom();
  },[])


  const handleChange = (e) => {
    console.log(e.target.value);
    setData({...data , [e.target.name]: e.target.value});
  }
  // console.log(data);
  const handleCompanyUpdate = async () =>{
    const company = await updateCompany(data);
    if(company)
      navigate("/viewCompanies");
  }

  return (
      <>
        <Navbar />
        <div className='company-update-container'>
            <div className='heading'>
                  Update Company
            </div>
  
            <div className ='container'>
              <div className = 'left'>
                <div className="company name">
                <input type="text" name="com_name" placeholder="Company Name" value={data.Com_Name} readOnly onChange={(e) => (handleChange(e))}/>
                </div>
  
                <div className="company desc">
                  <input type="text" name="com_desc" placeholder="Company Description" value={data.com_desc} onChange={(e) => (handleChange(e))}/>
                </div>
              </div>
  
              <div className = 'right'>
                <div className="company type">
                  <input type="text" name="Com_Type" placeholder="Company Type" value={data.Com_Type} onChange={(e) => (handleChange(e))}/>
                </div>
              </div>
            </div>
  
            <button className="update-btn" onClick={handleCompanyUpdate}>Update</button>
        </div>
      </>
    )

}

export default CompanyUpdate