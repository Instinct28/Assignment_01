import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudy = () => {

    const [formData, setformData] = useState({name:"",phase:"",description:"",sponsorName:""});
    const navigate = useNavigate();

    const onChange = (event) =>{
        setformData({...formData, [event.target.name] : event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/addStudy', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const json = await response.json();
        if(json.success){
            navigate('/');
        }
    }

  return (
    <div className='container my-5'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Study Name</label>
                <input type="text" className="form-control" name='name' onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phase" className="form-label">Study Phase</label>
                <input type="text" className="form-control" onChange={onChange} name='phase'/>
            </div>
            <div className="mb-3">
                <label htmlFor="sponsorName" className="form-label">Sponsor Name</label>
                <input type="text" className="form-control" onChange={onChange} name='sponsorName'/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" onChange={onChange} name='description'/>
            </div>
            <button type="submit" className="btn btn-primary">Add Study</button>
        </form>
    </div>
  )
}

export default AddStudy
