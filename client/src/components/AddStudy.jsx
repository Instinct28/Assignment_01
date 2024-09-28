import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudy = () => {

    const [formData, setformData] = useState({name:"",phase:"",description:"",sponsorName:""});
    const navigate = useNavigate();
    const [sponsors, setSponsors] = useState(["Sponsor 1", "Sponsor 2", "Sponsor 3"]);
    const [newSponsor, setNewSponsor] = useState("");

    const onChange = (event) =>{
        setformData({...formData, [event.target.name] : event.target.value});
    }

    const handleChange = (e) => {
        setNewSponsor(e.target.value);
      };

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

    const handleClick = () => {
        navigate('/');
    }

    const handleAddSponsor = (e) => {
        e.preventDefault();
        if (newSponsor && !sponsors.includes(newSponsor)) {
          setSponsors([...sponsors, newSponsor]);
        }
        setNewSponsor("");
    };

  return (
    <div className='con container my-5'>
        <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Study Name</label>
                <input type="text" className="form-control" name='name' onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phase" className="form-label">Study Phase</label>
                <select className="form-control select-field" name="phase" onChange={onChange} defaultValue="">
                    <option value="" disabled>Select Phase</option>
                    <option value="Phase I">Phase I</option>
                    <option value="Phase II">Phase II</option>
                    <option value="Phase III">Phase III</option>
                    <option value="Phase IV">Phase IV</option>
                </select>
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
