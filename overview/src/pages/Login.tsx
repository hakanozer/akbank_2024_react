import React, { FormEvent, useState } from "react";
import { cities } from "../utils/util";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../services/userService";

function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const userLogin = async (evt:FormEvent) => {
        evt.preventDefault()
        setError('')
        if (username === '') {
            setError('Username Empty!')
        }else if (password === '') {
            setError('Password Empty!')
        }else {
            authLogin(username, password).then(res => {
                const dt = res.data
                navigate('/dashboard')
            }).catch(err => {
                setError('Username or Password Fail!')
                console.log(err.message)
            })
           /*
           try {
                const call = await authLogin(username, password)
                console.log(call.data)
           } catch (error) {
                setError('Username or Password Fail!')
           }
           */
            console.log("this line call")
            //window.location.href = '/dashboard'
        }
    }


    return(
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>User Login</h2>
                    { error !== '' && 
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> {error}
                            <button type="button" className="btn-close" onClick={(evt) => setError('')}  aria-label="Close"></button>
                        </div>
                    }
                    <form onSubmit={userLogin}>
                        <div className="mb-3">
                            <input required onChange={(evt) => setUsername(evt.target.value) } className="form-control" placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <input required onChange={(evt) => setPassword(evt.target.value) } type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button className="btn btn-success">Login</button>
                    </form>

                    {/* 
                        <ol>
                        { cities.map( (item, index) =>  
                            <React.Fragment key={index}>
                                <li>{item}</li>
                            </React.Fragment>
                        )}
                        </ol>
                    */}
                    

                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    )
}

export default Login