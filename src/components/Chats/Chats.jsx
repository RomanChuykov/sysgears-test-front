
import { useState,useEffect } from 'react';
import { ChatsWrapper,Name,ChatList,ChatLi} from './Chats.styled';

function Chats({Users, onSelectUser}){
// const [ChatUsers,setChatUsers]=useState([])
const [latestMessage, setLatestMessage] = useState(null);

useEffect(() => {
  // Перевірка: якщо Users.data є масивом, оновлюємо стан
  if (Users && Array.isArray(Users.data) && Users.data.length > 0) {
    const sortedMessages = Users.data.sort((a, b) => new Date(b.messagedata) - new Date(a.messagedata));
    setLatestMessage(sortedMessages[0]);
  }
}, [Users]);

const handleClick = () => {
  if (latestMessage) {
    // Передаємо ім'я користувача в батьківський компонент
    onSelectUser(latestMessage.user);
  }
};
if (!latestMessage) {
  return <div>No recent messages available.</div>;
}   

return(
        <>
			<ChatsWrapper> Chats
            <ChatList>  
        
         
            <ChatLi onClick={handleClick}>
              <Name>{latestMessage.name}</Name>: {latestMessage.message} ({latestMessage.messagedata})
          </ChatLi>
     
      </ChatList>
      </ChatsWrapper>
        </>
    )
};
export default Chats;
