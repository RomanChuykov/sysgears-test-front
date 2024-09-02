import { useEffect,useState } from "react";
import Header from "./Header/Header";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";
import { getAPI } from '../FetchApi.js';
import { Wrapper,LeftSide} from './App.styled';

export const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [user, setUser] = useState(null); // Стан для збереження даних користувача
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data,setData]=useState({});
  const [messages, setMessages] = useState([]);
  const [register, setRegister]=useState(null);
  
  const handleLogin = (userData) => {
    setUser(userData); // Зберігаємо дані користувача після логіну
    console.log('userData', userData)
  };

  const handleRegister=(registerData)=>{
    setRegister(registerData);
    console.log('register', register)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Перемикаємо стан модального вікна
  };

  useEffect(() => {
    if (user) {
    getData();
    }
  }, [user]); 

  async function getData(){
    // console.log("getData")
     try {
      const data=await getAPI()
        setData({data })
        console.log('app', data); 
     
      } catch (error) {
        console.log(error.message)
      }
    }
   const handleSelectUser = (user) => {
    setSelectedUser(user);
    // Тут потрібно фільтрувати повідомлення для вибраного користувача
    const filteredMessages = Object.values(data).flat().filter((msg) => msg.user === user);
    setMessages(filteredMessages);
   }
  return (
  <Wrapper>
      <LeftSide>
      <Header onReg={handleRegister} onLogin={handleLogin} toggleModal={toggleModal} isModalOpen={isModalOpen} user={user}/>
      <Chats Users={data} onSelectUser={handleSelectUser}/>
      </LeftSide>
      {selectedUser && <Chat messages={messages} />}
    </Wrapper>
  );
};
