import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import studyContext from '../context/StudyContext';

const Home = () => {

    const [tableData, setTableData] = useState([]);
    const [elementId, setElementId] = useState([]);
    const [changes, setchanges] = useState(true);
    const object = useContext(studyContext);
    const navigate = useNavigate();

    const onChange = (event, id) => {
        if(event.target.checked){
            setElementId([...elementId, id]);
        }else{
            elementId.splice([...elementId, id]);
            setElementId([...elementId]);
        }
    }

    const updateStudy = (element) => {
        object.updateFun({element});
        navigate('/updateStudy');
    }

    const deleteStudy = async () => {
        const response = await fetch('http://localhost:8000/deleteStudy', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(elementId)
        });        
        setchanges(!changes);
    }

    useEffect(() => {
      fetch("http://localhost:8000/getStudy").then((res)=>{
        return res.json();
      }).then((res)=>{
        setTableData(res);
      }).catch(()=>{
        console.log("error in getting data");
      })
    }, [changes])
    

  return (
    <div>
      <h1 className='text-center'>Study Management</h1>
      <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Check Box</th>
                    <th>Study Name</th>
                    <th>Study Phase</th>
                    <th>Sponsor Name</th>
                    <th>Study Description</th>
                    <th>View</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((element)=>{
                        return(<tr key={element._id}>
                            <td><input type='checkBox' onChange={(event) => onChange(event, element._id)}/></td>
                            <td>{element.name}</td>
                            <td>{element.phase}</td>
                            <td>{element.sponsorName}</td>
                            <td>{element.description}</td>
                            <td><button>View</button></td>
                            <td><button onClick={()=>updateStudy(element)}>Edit</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
      <div className='container d-flex justify-content-around'>
        <Link to='/addStudy'><button className='btn btn-primary'>Add Study</button></Link>
        <button className='btn btn-primary' onClick={deleteStudy}>Delete Study</button>
      </div>
    </div>
  )
}

export default Home
