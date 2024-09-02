
import { a} from './Chat.styled';
function Chat({ messages }) {
    return (
      <div>
        {messages.length === 0 ? (
          <div>No messages available.</div>
        ) : (
          messages.map((msg) => (
            <div key={msg._id}>
              <div><strong>{msg.user}</strong>: {msg.message}</div>
              <div><em>{msg.messagedata}</em></div>
            </div>
          ))
        )}
      </div>
    );
  }
export default Chat;
