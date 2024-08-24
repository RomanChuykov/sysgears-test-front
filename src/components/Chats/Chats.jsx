
import { useState } from 'react';
import { ChatsWrapper,Name,ChatList,ChatLi} from './Chats.styled';
function Chats({Users}){
const [ChatUsers,setChatUsers]=useState({cUsers:Users.data})
console.log('ChatUsers', ChatUsers);
    return(
        <>
			<ChatsWrapper> Chats
            <ChatList>  
        {/* Ітерація по об'єкту ChatUsers.cUsers */}
        {Object.entries(ChatUsers.cUsers).map(([key, value], index) => (
          <ChatLi key={index}>
           <Name>{key}</Name> {value}
          </ChatLi>
        ))}
      </ChatList>
      </ChatsWrapper>
        </>
    )
};
export default Chats;
