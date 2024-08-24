
import { useState } from 'react';
import {Overlay,ModalContent,CloseButton,Label,Input,SubmitButton,RadioWrapper,RadioLabel,RadioInput} from './LogInModal.styled.js';


function LogInModal({ isOpen, handleClose }){
  const [selectedOption, setSelectedOption] = useState('login'); // 'login' or 'signup'
    if (!isOpen) return null; // Якщо модальне вікно закрите, нічого не рендеримо
    
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <Overlay>
        <ModalContent>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <h2>Log In</h2>
          <form>

          <RadioWrapper>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="login"
                checked={selectedOption === 'login'}
                onChange={handleOptionChange}
              />
              Log In
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="signup"
                checked={selectedOption === 'signup'}
                onChange={handleOptionChange}
              />
              Sign Up
            </RadioLabel>
          </RadioWrapper>

            <Label>Username:</Label>
            <Input type="text" placeholder="Enter your username" />
            <Label>Password:</Label>
            <Input type="password" placeholder="Enter your password" />
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </ModalContent>
      </Overlay>
    );
  }
export default LogInModal;
