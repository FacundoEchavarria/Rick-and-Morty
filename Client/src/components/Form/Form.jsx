import React, {useState} from "react";
import styles from './Form.module.css'
import validation from "./validation"; 

function Form({login}){

    const [userData, setUserData] =useState({
        userName: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] =useState({})

    const handleChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }



    return (
        <div className={styles.loginBox}>
            <form onSubmit={handleSubmit}>
                <div>   
                <img src="https://images7.alphacoders.com/633/633262.png" alt="Rick"/>
                <hr />
                </div>
                <div className={styles.loginInfo}>
                    <label>Username</label>
                    <div>
                        <input 
                            key= "1"
                            name="userName" 
                            value={userData.userName} 
                            type="text" 
                            placeholder="Enter your user username..." 
                            onChange={handleChange}
                        />
                        {errors.userName ? (
                        <span>{errors.userName}</span>
                        ) : null}
                    </div>
                </div>

                <div className={styles.loginInfo}>
                    <label>Email</label>
                    <div>
                        <input
                            key= "2" 
                            name="email" 
                            value={userData.email} 
                            type="text" 
                            placeholder="Enter your email..." 
                            onChange={handleChange}
                        />
                        {errors.email? <span>{errors.email}</span> : null}
                    </div>
                </div>

                <div className={styles.loginInfo}>
                    <label>Password</label>
                    <div>
                        <input 
                            key= "3"
                            name="password" 
                            value={userData.password} 
                            type="password" placeholder="Enter your password..." 
                            onChange={handleChange}
                            />
                        {errors.password? <span>{errors.password}</span> : null}
                    </div>
                </div>
                
                <input value='Sign In' type="submit" onClick={() => handleSubmit}/>
            </form>
        </div>  
    )
}

export default Form;