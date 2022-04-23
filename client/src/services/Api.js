import axios from "axios";
const url = "http://localhost:8000";


///////////////////////////////////////////////////////////
//Student
export const addStudent = async (obj) => {
    try {
        const data = await axios.post(`${url}/addstudent` , obj , { withCredentials: true });
        return data;
    } catch (error) {
        return error;
    }
}

export const loginStudent = async (obj) => {
    try {
        const data = await axios.post(`${url}/getstudent` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllStudent = async () => {
    try {
        const data = await axios.get(`${url}/getallstudent`);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updateStudent = async (obj) => {
    try {
        const data = await axios.post(`${url}/updatestudent` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

///////////////////////////////////////////////////////////
//Comapny
export const addCompany = async (obj) => {
    try {
        const data = await axios.post(`${url}/addcompany` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllCompanies = async () => {
    try {
        const data = await axios.get(`${url}/getallcompany`);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getCompany = async (id) => {
    try {
        const data = await axios.get(`${url}/getcompany/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const updateCompany = async (obj) => {
    try{
        const data = await axios.post(`${url}/updatecompany` , obj, {withCredentials : true});
        return data;
    } catch (error) {
        return error;
    }
}

export const deleteCompany = async (obj) => {
    try{
        const data = await axios.post(`${url}/deletecompany` , obj, {withCredentials : true});
        return data;
    } catch (error) {
        return error;
    }
}

///////////////////////////////////////////////////////////
//Job
export const addJob = async (obj) => {
    try {
        const data = await axios.post(`${url}/addjob` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllJob = async () => {
    try {
        const data = await axios.get(`${url}/getalljob`);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getJob = async (id) => {
    try {
        const data = await axios.get(`${url}/getjob/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const updateJob = async (obj) => {
    try {
        const data = await axios.post(`${url}/updatejob`,obj);
        return data;
    } catch (error) {
        return error;
    }
}

export const deleteJob = async (id) => {
    try {
        const data = await axios.post(`${url}/deletejob`,{id: id});
        return data;
    } catch (error) {
        return error;
    }
}

///////////////////////////////////////////////////////////
//Admin
export const loginAdmin = async (obj) => {
    try {
        const data = await axios.post(`${url}/loginadmin` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const updateAdmin = async (obj) => {
    try {
        const data = await axios.post(`${url}/updateadmin` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

