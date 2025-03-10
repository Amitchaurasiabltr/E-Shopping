import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        alert(`
            username    : ${data.username}
            password    : ${data.password}
        `)
    }
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <div className='container-fluid w=-100'>
                                <div className='w-100 m-auto'>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Login Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className='mb-3'>
                                            <input type='text' name='username' id='username' onChange={getData} placeholder='Enter Username : ' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type='password' name='password' id='password' onChange={getData} placeholder='Enter password : ' className='form-control' />
                                        </div>
                                        <button className='btn btn-secondary w-100 btn-lg' type='submit'>Login</button>
                                    </form>
                                    <div className='d-flex justify-content-between'>
                                        <Link className='text-dark' to="#">Forget Password</Link>
                                        <Link className='text-dark' to="/signup"> New User?Create a Free Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}