import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    var [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
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
        if (data.password === data.cpassword) {
            alert(`
            Name        : ${data.name}
            Username    : ${data.username}
            Email       : ${data.email}
            Phone       : ${data.phone}
            password    : ${data.password}
        `)
        }
        else
            alert("Password and Confirm Password Doesn't Matched!!!!")
    }
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <div className='container-fluid w=-100'>
                                <div className='w-100 m-auto'>
                                    <h5 className='text-center bg-secondary p-2 text-light'>Signup Section</h5>
                                    <form className='' onSubmit={postData}>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 coll-12'>
                                                <input type='text' name='name' id='name' onChange={getData} placeholder='Enter Full name : ' className='form-control' />
                                            </div>
                                            <div className='col-md-6 coll-12'>
                                                <input type='text' name='username' id='username' onChange={getData} placeholder='Enter Username : ' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 coll-12'>
                                                <input type='email' name='email' id='email' onChange={getData} placeholder='Enter Email Address : ' className='form-control' />
                                            </div>
                                            <div className='col-md-6 coll-12'>
                                                <input type='text' name='phone' id='phone' onChange={getData} placeholder='Enter Phone : ' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='password' name='password' id='password' onChange={getData} placeholder='Enter Password : ' className='form-control' />
                                            </div>
                                            <div className='col-md-6 col-12'>
                                                <input type='password' name='cpassword' id='cpassword' onChange={getData} placeholder='Confirm Password : ' className='form-control' />
                                            </div>
                                        </div>
                                        <button className='btn btn-secondary w-100 btn-lg' type='submit'>Signup</button>
                                    </form>
                                    <Link className='text-dark' to="/login"> Already User?Login to your Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}