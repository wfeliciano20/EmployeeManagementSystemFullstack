import axios from 'axios';

export const getAllEmployees = async() => {
    const response = await axios.get("http://localhost:8080/api/v1/employees");
    return response.data;
}

export const getEmployeeById = async(id) => {
    const response = await axios.get("http://localhost:8080/api/v1/employees/" + id);
    return response.data;

}

export const addNewEmployee = (employee) => {
    const response = axios.post("http://localhost:8080/api/v1/employees", employee);
    return response;
}

export const deleteEmployee = id => {
    const response = axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
    return response;
}

export const editEmployee = async(employee, id) => {
    const response = await axios.put('http://localhost:8080/api/v1/employees/' + id, employee);
    return response;
}