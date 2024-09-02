import axios from "axios";

axios.defaults.baseURL='http://localhost:5000/'

export async function getAPI(){
    
        const response=  await axios.get('');
        const data=response.data;
        // console.log('data getApi', data);
        return data;
     
};
export async function signIn(data){
        const response=await axios.post('users/login',data); 
        console.log('signIn response', response);
        return response;
};

export async function register(data){
        const response=await axios.post('users/register',data);
        console.log('register response', response);
        return response;
}


export async function postApi(data){
        const response=await axios.post('',{data}) 
        return response;
};