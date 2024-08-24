import { useEffect,useState } from "react";
import Header from "./Header/Header";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";
import { getAPI,postApi } from '../FetchApi.js';
import { Wrapper,LeftSide} from './App.styled';

export const App = () => {
  const [data,setData]=useState({});
  
  async function getData(){
    // console.log("getData")
     try {
      const data=await getAPI()
        setData({data
        })
        console.log('app', data); 
      } catch (error) {
        console.log(error.message)
      }
    }
  
    useEffect(()=>{getData();},[])
  return (
  <Wrapper>
      <LeftSide>
      <Header/>
      {/* <Chats Users={data}/> */}
      </LeftSide>
      <Chat/>
    </Wrapper>
  );
};
