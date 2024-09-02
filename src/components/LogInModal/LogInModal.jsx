import { useState } from 'react';
import { Overlay, ModalContent, CloseButton, Label, Input, SubmitButton, RadioWrapper, RadioLabel, RadioInput } from './LogInModal.styled.js';
import { signIn, register} from '../../FetchApi.js';


function LogInModal({ isOpen, handleClose, onLogin, onReg}) {
  const [selectedOption, setSelectedOption] = useState('login'); // 'login' або 'signup'
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null; // Якщо модальне вікно закрите, нічого не рендеримо

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Забороняємо перезавантаження сторінки
    const payload = { name, password };

    try {
      if (selectedOption === 'login') {
        // Виконуємо логін
        console.log('Login payload:', payload);
        const result=await signIn(payload)
        console.log('result', result)
        if (result.data && result.data.user) {
          onLogin(result.data.user);
        }
        // Закриваємо модалку після логіну
        handleClose();
      } else if (selectedOption === 'signup') {
        // Виконуємо POST запит для реєстрації
        console.log('reg payload', payload)
        const result= await register(payload)
        console.log('result', result)
        // Закриваємо модалку після реєстрації
        handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <h2>{selectedOption === 'login' ? 'Log In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
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

          <Label>name:</Label>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handlenameChange}
          />
          <Label>Password:</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </ModalContent>
    </Overlay>
  );
}

export default LogInModal;