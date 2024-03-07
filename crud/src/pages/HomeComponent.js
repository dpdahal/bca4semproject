import { useEffect,useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function HomeComponent() {
  const [students, setStudents] = useState([]); 
  const getData=()=>{
    axios.get("http://localhost/bca4semproject/api/").then((response)=>{
      setStudents(response.data);
    }).catch((error)=>{
      console.log(error);
    });   
  }
  useEffect(() => {
    getData();
  },[]);


  const deleteData=(id)=>{
    const params = { id: id };
    axios.delete(`http://localhost/bca4semproject/api/`,{params}).then((response)=>{
      getData();
    }).catch((error)=>{
      console.log(error);
    });

  }

  return (
    <>
    
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.n</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students && students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>
              <Link to={`/update-student/${student.id}`}>Edit</Link>
              <button onClick={()=>deleteData(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>

  )
}

export default HomeComponent;