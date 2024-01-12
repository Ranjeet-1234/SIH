import { useState,useRef } from 'react'
import waveImg from '../image/wave.png'
import satyama from '../image/satyama-removebg-preview.png'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let [viewmessage ,setViewMessage]=useState(false);
    let [message ,setMessage]=useState(false);
    let resetUserName = useRef();
    let resetPassword = useRef();
    let admin={};
    let navigate = useNavigate();
    function setValues(Property,value){
        admin[Property]=value;
    }
    function login(){
        console.log(admin)
        fetch('https://pretrail-backend.onrender.com/admin/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(admin)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.success === true){
                navigate('/dashboard')
            }
            else{
                setViewMessage(true);
                setMessage(data.message);
                resetUserName.current.value="";
                resetPassword.current.value="";
                setTimeout(()=>{
                    setViewMessage(false);
                },5000)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
        <div className="body">
            <img className="wave" src={waveImg} alt="wave" />
            <div className="container">
                <div className="login-content">
                    <form action="./Table_SIH/table.html">
                        <div>
                            <img src={satyama} className="satayam-bg" alt="Ashokstamb"/>
                        </div>
                        <h2 className="title">Case Information System</h2>
                        <div className="input-div select" id="select-field">
                            <div className="div" id="opt-field">
                                <select name="" id="select-box">
                                    <option value="caseOne" style={{ fontSize: 16 + 'px' }}>Select the Type of Case</option>
                                    <option value="caseOne" style={{ fontSize: 16 + 'px' }}>Political Case</option>
                                    <option value="caseOne" style={{ fontSize: 16 + 'px' }}>Property Case</option>
                                    <option value="caseOne" style={{ fontSize: 16 + 'px' }}>Criminal Case</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input ref={resetUserName} type="text" placeholder="Enter Username" className="input" onChange={(e)=>{
                                    setValues('username',e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input ref={resetPassword} type="password" placeholder='Enter Password' className="input" onChange={(e)=>{
                                    setValues('password',e.target.value);
                                }}/>
                            </div>
                        </div>
                        <p>ForgotePassword?</p>
                        <input type="button" className="btn" value="Login"  onClick={()=>{
                            navigate('/dashboard');
                            // login();
                        }} />
                    </form>
                </div>
            </div>
        </div>
        {
            viewmessage === true?(
                <div className='message'>
                    <p>{message}</p>
                </div>
            ):null
        }
        
        </>
    )
}