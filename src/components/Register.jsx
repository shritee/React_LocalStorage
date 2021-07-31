import React,{useState,useEffect} from 'react'
import '../components/Login.css'
import { useHistory } from 'react-router-dom';

//To get from localStorage
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

export default function Login(props) {
    const[email,setEmail]=useState("")
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [entry, setEntry] = useState(getLocalItem());
    const history=useHistory();

    const handleUser=()=>{
       
        if(!user || !pass)
        {
            alert("please enter username and password")
        }
        else{ 
            setEntry([...entry,{user,pass,email}])
            setUser('')
            setPass('')
            setEmail('')
        }
        history.push('/Login')
    }
    const onsubmit=(event)=>{
        event.preventDefault();
    }
    //Storing in a Local Storage
    useEffect(() => {
       localStorage.setItem('lists',JSON.stringify(entry))
    }, [entry])
   
    return (
        <>
        <div className="container" style={{width:400}}>
        <form onSubmit={onsubmit}>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" 
                placeholder="✍ Enter Username" 
                className="form-control " 
                value={user}
                onChange={(e)=>setUser(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password"
                placeholder="✍ Enter Password" 
                className="form-control " 
                value={pass}
                onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email"
                placeholder="✍ Enter Password" 
                className="form-control " 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="bttn">
            <input type="button" 
            className="btn btn-info text-white" 
            onClick={handleUser} 
            value="Register"/> 
            </div>

        </form>
        </div>
{/* 
        <table className="table table-dark table-hover container">
  <thead>
    <tr>
      
      <th scope="col">usename</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {entry.map((elem,i)=>{
       return(
        <tr key={i}>
        <td>{elem.user}</td>
        <td>{elem.pass}</td>
        <td>{elem.email}</td>
      </tr> */}
       {/* )
    })}
  </tbody>
</table> */}
            
        </>
    )
}
