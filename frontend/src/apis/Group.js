import axios from 'axios'
import { toast } from 'react-hot-toast';
const backendURL = process.env.REACT_APP_BACKEND_BASE_URL
export const addGroup=async (groupName,groupColor,groupLogo)=>{
    try {
        const result=await axios.post(`${backendURL}/group`,{
             groupName,
             groupColor,
             groupLogo
        },{
            validateStatus(status){
                return status===400||status===201
            }
        })
        if(result.status===400){
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

export const getGroups=async ()=>{
    try {
       
        const result=await axios.get(`${backendURL}/groups`)
        if (result.status === 201 ) {
           toast.success(result.data.message); 
           return result.data.data; 
       } 
     
       return false;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong try again later!");
        return false;
    }
}