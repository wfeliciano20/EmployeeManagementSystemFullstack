import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewEmployee } from '../Data/Fetch';

const Input = () => {

  const navigate = useNavigate();

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

  const onAddEmployee = () => {
    addNewEmployee(employee);

    navigate('/');

  }

  const onCancel = () => {
    navigate('/');
  }

  return (
    <div>
      <div className="w-96 shadows-xl p-6 mx-auto">
        <h2 className="font-bold text-xl text-gray-600 m-6">Add New Employee</h2>
        <form onSubmit={onAddEmployee}>

          <label htmlFor="first Name" className="font-bold text-xl text-gray-600">First Name</label>
          <input type="text" name="firstName" id="firstName" value={employee.firstName} onChange={e => setEmployee({...employee, firstName: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="last Name" className="font-bold text-xl text-gray-600">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={employee.lastName} onChange={e => setEmployee({...employee, lastName: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="email" className="font-bold text-xl text-gray-600">Email</label>
          <input type="email" name="email" id="email" value={employee.email} onChange={e => setEmployee({...employee, email: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="phoneNumber" className="font-bold text-xl text-gray-600">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" value={employee.phoneNumber} onChange={e => setEmployee({...employee, phoneNumber: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="address" className="font-bold text-xl text-gray-600">Address</label>
          <input type="text" name="address" id="address" value={employee.address} onChange={e => setEmployee({...employee, address: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="city" className="font-bold text-xl text-gray-600">City</label>
          <input type="text" name="city" id="city" value={employee.city} onChange={e => setEmployee({...employee, city: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="state" className="font-bold text-xl text-gray-600">State</label>
          <input type="text" name="state" id="state" value={employee.state} onChange={e => setEmployee({...employee, state: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="zipCode" className="font-bold text-xl text-gray-600">Zip Code</label>
          <input type="text" name="zipCode" value={employee.zipCode} onChange={e => setEmployee({...employee, zipCode: e.target.value})} id="zipCode" className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="country" className="font-bold text-xl text-gray-600">Country</label>
          <input type="text" name="country" id="country" value={employee.country} onChange={e => setEmployee({...employee, country: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <label htmlFor="department" className="font-bold text-xl text-gray-600">Department</label>
          <input type="text" name="department" id="department" value={employee.department} onChange={e => setEmployee({...employee, department: e.target.value})} className="w-full py-2 px-2 border-solid border-2 border-gray-600" />

          <div>
            <button className="px-2 py-3 mt-2 mr-2 rounded-md bg-gray-600 text-white" onClick={onAddEmployee}>Add Employee</button>
            <button className="px-2 py-3 rounded-md bg-red-600 text-white" onClick={onCancel}>Cancel</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Input