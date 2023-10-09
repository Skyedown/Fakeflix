import React, {useState, useRef} from 'react'
import { Link, useNavigate } from "react-router-dom";


//styles
import './login.css'




function Login() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")

const [logged,setLogged] = useState(false)


const navigate = useNavigate()


const handleSubmit = () => {
    if (email === "petusko" && password==="petusko") {
        console.log("Success")
        setEmailError("")
        setPasswordError("")
        setLogged(true)
        navigate("/list")
    }
     if (email !== "peter") {
            setEmailError("Zlý email")
    }
     if (password !== "peter") {
        setPasswordError("Zlé heslo")
}
}




  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-container-title'>FakeFlix</h1>
            <div className="login-form">
                <form action="submit">
                    <div className="login-form-mail">
                        <label htmlFor="mail">Prihlasovací e-mail</label>
                        <input 
                            onChange={(e)=>setEmail(e.target.value)} 
                            placeholder='Zadaj e-mail' 
                            id='email'
                            type="text" 
                            value={email}
                            autoComplete="off"
                            required 
                        />
                    </div>
                    {emailError}
                    <div className="login-form-password">
                        <label htmlFor="password">Heslo</label>
                        <input 
                            onChange={(e)=>setPassword(e.target.value)} 
                            placeholder='Zadaj heslo' 
                            id='password'
                            type="password" 
                            value={password}
                            required 
                        />
                    </div>
                    {passwordError}
                </form>
                <Link className='register-btn' to='/register'>Nemáš účet? Zaregistruj sa</Link>
                <button onClick={handleSubmit} className='login-form-button'>Prihlásiť sa</button>
            </div>
        </div>
    </div>

    
  )
}

export default Login