import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigation=useNavigate()

    const {id}=useParams()

    const [user, setUser]=useState({
        name:"",
        username:"",
        email:"",
        description:""
    });

    const{name, username, email, description}=user;

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadUser()
    },[])

    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigation("/");
    };

    const loadUser =async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4"> Edit User</h2>
                <form onSubmit={(e) =>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                        Username
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Username"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        E-mail
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your email addres"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">
                        Description
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your description"
                    name="description"
                    value={description}
                    onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                <button type="submit" className="btn btn-outline-primary  mx-2">Submit</button>
                <button type="cansel" className="btn btn-outline-danger  mx-2" to="/">Cansel</button>
                </form>
            </div>
        </div>
    </div>
  );
}
