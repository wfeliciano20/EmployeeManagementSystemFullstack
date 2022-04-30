import React from 'react';
import {Link} from 'react-router-dom';
import { deleteEmployee } from '../Data/Fetch';
import {useNavigate} from 'react-router-dom';


const Table = ({employees}) => {
  const navigate = useNavigate();

  const handleEdit = (id,e) => {
    e.preventDefault();
    navigate('/edit/'+ id);
  }

  const handleDelete = (id,e) => {
    e.preventDefault();
    deleteEmployee(id);
  }
  return (
    <div className="py-6">

      <button className="bg-gray-500 text-white px-4 py-2 mb-4 ml-4 rounded-lg"><Link to={"/add"}>Add Employee</Link></button>

      <table className="able-auto border-collapse w-full">
        <thead>

          <tr className="rounded-lg text-sm font-medium bg-slate-500 text-gray-200 text-left" style={{"fontSize": "0.9674rem"}}>
            <th className="px-4 py-2 bg-gray-500">Id</th>
            <th className="px-4 py-2 bg-gray-500">First Name</th>
            <th className="px-4 py-2 bg-gray-500">Last Name</th>
            <th className="px-4 py-2 bg-gray-500">Email</th>
            <th className="px-4 py-2 bg-gray-500">Phone Number</th>
            <th className="px-4 py-2 bg-gray-500">Address</th>
            <th className="px-4 py-2 bg-gray-500">City</th>
            <th className="px-4 py-2 bg-gray-500">State</th>
            <th className="px-4 py-2 bg-gray-500">Zip Code</th>
            <th className="px-4 py-2 bg-gray-500">Country</th>
            <th className="px-4 py-2 bg-gray-500">Department</th>
            <th className="px-4 py-2 bg-gray-500">Actions</th>
          </tr>

        </thead>

        <tbody className="text-sm font-normal text-gray-700">
        
        {employees.map(employee => {
          return (
          <tr key={employee.id} className="hover:bg-gray-100 border-b border-gray-200 py-10">
            <td className="px-4 py-4">{employee.id}</td>
            <td className="px-4 py-4">{employee.firstName}</td>
            <td className="px-4 py-4">{employee.lastName}</td>
            <td className="px-4 py-4">{employee.email}</td>
            <td className="px-4 py-4">{employee.phoneNumber}</td>
            <td className="px-4 py-4">{employee.address}</td>
            <td className="px-4 py-4">{employee.city}</td>
            <td className="px-4 py-4">{employee.state}</td>
            <td className="px-4 py-4">{employee.zipCode}</td>
            <td className="px-4 py-4">{employee.country}</td>
            <td className="px-4 py-4">{employee.department}</td>
            <td className="px-4 py-4">
            <button className="py-2 px-4 m-2 rounded-lg bg-indigo-700 text-white" onClick={handleEdit.bind(this,employee.id)}><Link to={"/edit"}>edit</Link></button>
            <button className="py-2 px-4 rounded-lg bg-red-700 text-white" onClick={handleDelete.bind(this,employee.id)}>delete</button>
            </td>
          </tr>
          )
        })}
          
        </tbody>

      </table>
    

    </div>
    
  )
}

export default Table;