// import React from 'react'
// import './Login.css'


// const Login = () => {
//   return (
//     <div className="login">
//         <div className="login__element">
//             <p>ThreeR</p>
//         </div>
//         <h1 className="login__element">Đăng ký tài khoản</h1>
//         <p className="login__element">Nhập email của bạn để đăng ký</p>
//         <div className="login__element">
//             <input type="text" placeholder='your@email.com'/>
//         </div>
//         <div className="login__element"></div>
//         <div className="login__element"></div>
//         <div className="login__element"></div>
//         <div className="login__element"></div>
//     </div>
//   )
// }

// export default Login

import React,{useState, useEffect} from 'react'
import '../Register/Register.css'
import { useNavigate} from 'react-router-dom';
import logo from '../../Components/Assets/WEB/LOGO/logokonen.png'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { loginRoute } from '../../utils/APIRoutes';


const Login = ({ onExit, closeTippy }) => {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        username: "",
        password: "",
    })
    
    const toastOptions ={
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if (handleValidation()) {
            const {password, username} = values
            const {data} = await axios.post(loginRoute, {
                username,
                password,
            })
            console.log(data)
            if(data.status ===false) {
                toast.error(data.msg, toastOptions)
            }
            if(data.status === true)    {
                localStorage.setItem('Three-R-user',JSON.stringify(data.user))
                closeTippy()
                navigate("/")
                
            }
        }

    };

    const handleValidation = () => {
        const {password, username} = values
        if(password===""){
            
          toast.error("Email and Password is required",
            toastOptions
          )
          return false
      }else if (username.length ===""){
          toast.error("Email and Password is required",
              toastOptions
          )
          return false;
      } 
      return true;
      }
    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }
  return (
    <>
        <div className='register'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <img src={logo} alt="" />
                    <h1>Three R</h1>
                </div>
                <input type="text" 
                placeholder='Username' 
                name='username' 
                onChange={(e) => handleChange(e)} 
                min="3"
                />
                
                <input type="password" 
                placeholder='Password' 
                name='password' 
                onChange={(e) => handleChange(e)} 
                />
                
                <button type='submit'>Log In</button>
                <span>
                    Don't have an account ?
                    <p onClick={ onExit }>Register</p>
                </span>
            </form>
        </div>
        {/* <ToastContainer /> */}
    
    </>
  )
}


export default Login