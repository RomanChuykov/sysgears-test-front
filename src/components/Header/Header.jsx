
import { useState } from 'react';
import { HeaderWrapper,Avatar,LogIn,SearchText,AvatarWrapper} from './Header.styled';
import LogInModal from 'components/LogInModal/LogInModal';

function Header(){
    const [text,setText]=useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <HeaderWrapper>
            <AvatarWrapper>
            <Avatar src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png" alt="avatasr" />
            </AvatarWrapper>
            <LogIn onClick={handleOpenModal}>Log in</LogIn>
            <LogInModal isOpen={isModalOpen} handleClose={handleCloseModal} />
            <SearchText
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='Search or start new chat'
                ></SearchText>
        </HeaderWrapper>
    )
};
export default Header;
