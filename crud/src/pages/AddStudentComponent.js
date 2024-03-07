import{useState} from 'react';
import axios from 'axios';
function AddStudentComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const insertStudent = (e) => {
        e.preventDefault();
        let data={name, email, address};
        axios.post("http://localhost/bca4semproject/api/", data,{
            headers:{
                "Content-Type":"application/json"
            }        
        }).then((response)=>{
            alert("data was insertetd");
            setName("")
            setEmail("")
            setAddress("")
        }).catch((error)=>{
            console.log(error);
        });

    };
    return (
        <div>
            <h1>Add Student</h1>
            <form action="" onSubmit={insertStudent}>
                <label htmlFor="name">Name:</label> <br/>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
                <label htmlFor="email">Email:</label> <br/>
                <input value={email} type="text"onChange={(e)=>setEmail(e.target.value)} /> <br/>
                <label htmlFor="address">Address:</label> <br/>
                <input value={address} type="text" onChange={(e)=>setAddress(e.target.value)}/> <br/><br/>
                <button>Add Student</button>
            </form>           

        </div>
    )
}

export default AddStudentComponent;