import React, { useContext, useState } from 'react';
import studyContext from '../context/StudyContext';
import { useNavigate } from 'react-router-dom';

const View = () => {

    const navigate = useNavigate();
    const object = useContext(studyContext);
    const formData = object.data.element;

    const handleClick = () => {
        navigate('/');
    }

  return (
    <div className='con container my-3'>
      <i className="fa-solid fa-xmark my-3" onClick={handleClick}></i>
      <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Study Name</th>
                    <th>Study Phase</th>
                    <th>Sponsor Name</th>
                    <th>Study Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{formData.name}</td>
                    <td>{formData.phase}</td>
                    <td>{formData.sponsorName}</td>
                    <td>{formData.description}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default View
