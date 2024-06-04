import React,{useState, useEffect} from 'react'
import './Register.css'
import { useNavigate} from 'react-router-dom';
import logo from '../../Components/Assets/WEB/LOGO/logokonen.png'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { regsiterRoute } from '../../utils/APIRoutes';

const Register = ({onExit,closeTippy}) => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const toastOptions ={
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
    }
    // useEffect (() =>{
    //     if(localStorage.getItem('Three-R-user'))  {
    //       navigate('/')
    //     }
    // },[])
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if (handleValidation()) {
            const {password, username, email} = values
            const {data} = await axios.post(regsiterRoute, {
                username,
                email,
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
        const {password, confirmpassword, username, email} = values
        if(password!==confirmpassword){
            
            toast.error("password and confirm password shoul be same.",
            toastOptions
        )
        return false
    }else if (username.length<3){
        toast.error("Username should be greater than 3 characters",
            toastOptions
        )
        return false;
    } else if (password.length < 8){
        toast.error("Password should be greater than 8 characters",
            toastOptions
        )
        return false;
    } else if(email===""){
        toast.error("email is required",
        toastOptions
    )
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
                />
                <input type="email" 
                placeholder='Email' 
                name='email' 
                onChange={(e) => handleChange(e)} 
                />
                <input type="password" 
                placeholder='Password' 
                name='password' 
                onChange={(e) => handleChange(e)} 
                />
                <input type="password" 
                placeholder='Confirm Password' 
                name='confirmpassword' 
                onChange={(e) => handleChange(e)} 
                />
                <button type='submit'>Create User</button>
                <span>
                    Already have an account ?
                    <p onClick={ onExit }>Login</p>
                </span>
            </form>
        </div>
        {/* <ToastContainer /> */}
    
    </>
  )
}


export default Register