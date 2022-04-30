import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-12 shadow-xl bg-gray-500 text-white flex justify-between items-center">
      <div className="text-xl tracking-wide p-4 font-thin">Employee Management System</div>
      
      <div className="pr-4">
        <ul className="list-none flex justify-center">
          <li className="m-2"><Link to="/">Home</Link></li>
          <li className="m-2"><Link to="/add">Add Employee</Link></li>
        </ul>
      </div>
        
    
    </div>
  )
}

export default Header;