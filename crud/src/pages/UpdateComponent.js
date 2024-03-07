import{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
function UpdateComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();
    const getUser=()=>{    
        axios.get(`http://localhost/bca4semproject/api/?id=${id}`).then((response)=>{
           let user = response.data;
              setName(user.name);
              setEmail(user.email);
              setAddress(user.address);
        }).catch((error)=>{
            console.log(error);
        });
    }

    useEffect(() => {
        getUser();
    },[])

    const updateStudent = (e) => {
        e.preventDefault();
               let data={id,name, email, address};
        axios.put("http://localhost/bca4semproject/api/", data,{
            headers:{
                "Content-Type":"application/json"
            }        
        }).then((response)=>{
            alert("data was update");
        }).catch((error)=>{
            console.log(error);
        });

    };
    return (
        <div>
            <h1>Update Student</h1>
            <form action="" onSubmit={updateStudent}>
                <label htmlFor="name">Name:</label> <br/>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
                <label htmlFor="email">Email:</label> <br/>
                <input value={email} type="text" disabled /> <br/>
                <label htmlFor="address">Address:</label> <br/>
                <input value={address} type="text" onChange={(e)=>setAddress(e.target.value)}/> <br/><br/>
                <button>Update</button>
            </form>           

        </div>
    )
}

export default UpdateComponent;