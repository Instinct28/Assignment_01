import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import studyContext from '../context/StudyContext';

const UpdateStudy = () => {
    const object = useContext(studyContext);
    const [formData, setformData] = useState({...object.data.element});
    const navigate = useNavigate();

    const onChange = (event) =>{
        setformData({...formData, [event.target.name] : event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/updateStudy', {
            method: 'PUT',
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

    const handleClick = () => {
        navigate('/');
    }

  return (
    <div className='con container my-5'>
        <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Study Name</label>
                <input type="text" className="form-control" name='name' onChange={onChange} value={formData.name} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phase" className="form-label">Study Phase</label>
                <input type="text" className="form-control" onChange={onChange} value={formData.phase} name='phase'/>
            </div>
            <div className="mb-3">
                <label htmlFor="sponsorName" className="form-label">Sponsor Name</label>
                <input type="text" className="form-control" onChange={onChange} value={formData.sponsorName} name='sponsorName'/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" onChange={onChange} value={formData.description} name='description'/>
            </div>
            <button type="submit" className="btn btn-primary">Update Study</button>
        </form>
    </div>
  )
}

export default UpdateStudy
