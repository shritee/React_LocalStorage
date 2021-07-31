import React,{useState } from 'react'
import '../components/Login.css'
import { useHistory } from 'react-router-dom'

const getLocalItem=()=>{
    let list=localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return []
    }
}

export default function Login() {
    const [user1, setUser1] = useState("")
    const [pass1, setPass1] = useState("")
    const [entry, setEntry] = useState(getLocalItem());
    console.log(entry)
    const history=useHistory();
    const handleUser=()=>{
        
        
        if(!user1 || !pass1)
        {
            alert("please enter username and password")
        }
        else{ 
            setEntry([...entry,{user1,pass1}])
            setUser1('')
            setPass1('')
        }
        if(entry.user===entry.user1 && entry.pass===entry.pass1)
        {
            alert("Login Successful")
            history.push('/Home')
        }
        else{
            alert("Invalid details ")
        }
     
    }
    const onsubmit=(event)=>{
        
        event.preventDefault();
    }
   
    return (
        <>
        <div className="container" style={{width:400}}>
        <form onSubmit={onsubmit}>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" 
                placeholder="✍ Enter Username" 
                className="form-control " 
                value={user1}
                onChange={(e)=>setUser1(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password"
                placeholder="✍ Enter Password" 
                className="form-control " 
                value={pass1}
                onChange={(e)=>setPass1(e.target.value)}/>
            </div>
            <div className="bttn">
            <input type="button" 
            className="btn btn-info text-white" 
            onClick={handleUser} 
            value="Login"/> 
            </div>

        </form>
        </div>
        </>
    )
}
