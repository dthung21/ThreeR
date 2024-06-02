import React ,{useState} from 'react';
import './User.css'
import Login from '../../../Pages/Login/Login';
import Register from '../../../Pages/Register/Register'

const User = ({onExit}) => {
    const [visible, setVisible] = useState(false);
    const handleExit = () => {
        setVisible(!visible);
    }; 
    return (
      <div className='users'>
        <div className={`users__login ${visible ? 'displaynone' : ''}`}>
            <Login onExit={handleExit}/>
        </div>
        <div className={`user__register ${!visible ? 'displaynone' : ''}`}>
            <Register onExit={handleExit}/>
        </div>
            
      </div>
    )
  }
  
  export default User