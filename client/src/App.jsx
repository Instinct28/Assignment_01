import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddStudy from './components/AddStudy';
import UpdateStudy from './components/UpdateStudy';
import studyContext from './context/StudyContext';
import { useState } from 'react';
import View from './components/View';

function App() {

  const [data, setdata] = useState({});

  const updateFun = (object) => {
    setdata({...data, ...object});
  }

  const object = {data, updateFun};

  return (
    <>
      <BrowserRouter>
        <studyContext.Provider value={object}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addStudy' element={<AddStudy/>} />
            <Route path='/updateStudy' element={<UpdateStudy/>} />
            <Route path='/view' element={<View/>}/>
          </Routes>
        </studyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
