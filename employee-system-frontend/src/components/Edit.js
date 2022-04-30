import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee, getEmployeeById } from '../Data/Fetch';

const Edit = () => {
  const navigate = useNavigate();
  const { id  } = useParams();
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState({
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    address:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    department:""
  })

  useEffect(() => {
    const fetchEmployee = async () => {
      setLoading(true);
      try {
        const response = await getEmployeeById(id);
        setEmployee(response);
        
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchEmployee();
  },[])

  const handleEdit = async () => {
    try {
      const response = await editEmployee(employee,id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
    navigate('/');
  }

  return(
  
    loading ? <h1>Loading...</h1> : (
    <div>
      <div className="w-96 shadows-xl p-6 mx-auto">
        <h2 className="font-bold text-xl text-gray-600 m-6">Add New Employee</h2>
        <form>

          <label htmlFor="id" className="font-bold text-xl text-gray-600">Id</label>
          <input type="text" name="id" id="id" value={employee.id} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="first Name" className="font-bold text-xl text-gray-600">First Name</label>
          <input type="text" name="firstName" id="firstName" value={employee.firstName} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="last Name" className="font-bold text-xl text-gray-600">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={employee.lastName} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="email" className="font-bold text-xl text-gray-600">Email</label>
          <input type="email" name="email" id="email" value={employee.email} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="phoneNumber" className="font-bold text-xl text-gray-600">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" value={employee.phoneNumber} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="address" className="font-bold text-xl text-gray-600">Address</label>
          <input type="text" name="address" id="address" value={employee.address} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="city" className="font-bold text-xl text-gray-600">City</label>
          <input type="text" name="city" id="city" value={employee.city} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="state" className="font-bold text-xl text-gray-600">State</label>
          <input type="text" name="state" id="state" value={employee.state} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="zipCode" className="font-bold text-xl text-gray-600">Zip Code</label>
          <input type="text" name="zipCode" value={employee.zipCode} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} id="zipCode" className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="country" className="font-bold text-xl text-gray-600">Country</label>
          <input type="text" name="country" id="country" value={employee.country} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="department" className="font-bold text-xl text-gray-600">Department</label>
          <input type="text" name="department" id="department" value={employee.department} onChange={e => setEmployee({...employee, [e.target.name]: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />
          
        </form>

        <button className="px-2 py-3 mt-2 mr-2 rounded-md bg-gray-600 text-white" onClick={handleEdit}>Edit Employee</button>
        <button className="px-2 py-3 mt-2 mr-2 rounded-md bg-red-600 text-white" onClick={e => navigate('/')}>Cancel</button>
      </div>
    
    </div>))
    
}

export default Edit;