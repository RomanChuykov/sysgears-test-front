
import { useState } from 'react';
import { a} from './Header.styled';
function Header(){
    const [text,setText]=useState('');
    
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <>
			<button>Log in</button>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='Search or ctart new chat'
            ></input>
        </>
    )
};
export default Header;
