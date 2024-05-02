import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    // import { useAuth } for the shared context across components
    const authContext = useAuth()

    function handleUsernameChange(event){
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        // if (username==='in28minutes' && password==='password'){
        //     authContext.setAuthenticated(true)
        if (authContext.login(username, password)){
            console.log('Successful');
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
            
        }
        else{
            // authContext.setAuthenticated(false)
            console.log('Failed');
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }


    // function SuccessMessageComponent(){
    //     if (showSuccessMessage){
    //         return <div className='successMessage'>Authenticated Successful</div>
    //     }
    //     return null
    // }

    // function ErrorMessageComponent(){
    //     if (showErrorMessage){
    //         return <div className='errorMessage'>Authenticated Failed.</div>
    //     }
    //     return null
    // }


    return (
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'>Authenticated Successful</div>}
            {showErrorMessage &&  <div className='errorMessage'>Authenticated Failed.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="Password" name="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
        </div>
        </div>
    )
}