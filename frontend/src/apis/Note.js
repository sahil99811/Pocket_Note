import axios from 'axios'
import { toast } from 'react-hot-toast';
const backendURL = process.env.REACT_APP_BACKEND_BASE_URL
export const createNote=async (text,groupId)=>{
    try {
        const result=await axios.post(`${backendURL}/group/${groupId}`,{
            text
       },{
           validateStatus(status){
               return status===400||status===204||status===201
           }
       })
       if(result.status===400||result.status===404){
           toast.error(result?.data?.message); 
           return false;
       }
       else if (result.status === 201 ) {
           toast.success(result.data.message);
           return true; 
       } 
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!"); 
        return false;
    }
}

export const getNotes=async (groupId)=>{
    try {
        const result=await axios.post(`${backendURL}/group/${groupId}`,{
           validateStatus(status){
               return status===400||status===204||status===201
           }
       })
       if(result.status===400||result.status===404){
           toast.error(result?.data?.message); 
           return false;
       }
       else if (result.status === 201 ) {
           toast.success(result.data.message); 
           return result.data.data; 
       }  
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!");
        return false;
    }
}