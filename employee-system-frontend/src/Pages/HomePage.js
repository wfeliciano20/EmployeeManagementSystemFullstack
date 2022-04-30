import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { getAllEmployees } from '../Data/Fetch';



const HomePage = () => {

const [loading, setLoading] = useState(true);
const [employees, setEmployees] = useState();

useEffect(() => {
  const fetch =async () =>{
    setLoading(true);
    try {
      const response = await getAllEmployees();
      setEmployees(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  fetch();
}, [])

  return (
    <>
      <Header />
      {loading ? <div>Loading...</div> : <Table employees={employees} />}
    </>
  )
}

export default HomePage