import { useState } from 'react';
import { HeaderWrapper, Avatar, LogIn, SearchText, AvatarWrapper ,UserName} from './Header.styled';
import LogInModal from 'components/LogInModal/LogInModal';

function Header({ onReg, onLogin, toggleModal, isModalOpen, user}) {
    const [text, setText] = useState('');

    const handleCloseModal = () => toggleModal(false);
    const handleOpenModal = () => toggleModal(true);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <HeaderWrapper>
            <AvatarWrapper>
                <Avatar src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png" alt="avatar" />
            </AvatarWrapper>
            {user ? (
        <UserName>{user.name}</UserName>
      ) : (
        <LogIn onClick={handleOpenModal}>Log in</LogIn>
      )}
            {/* <LogIn onClick={handleOpenModal}>Log in</LogIn> */}
            <LogInModal isOpen={isModalOpen} 
            handleClose={handleCloseModal} 
            onLogin={onLogin}
            onReg={onReg}/>
            <SearchText
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='Search or start new chat'
            />
        </HeaderWrapper>
    );
}

export default Header;