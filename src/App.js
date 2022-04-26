
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes, Route} from "react-router-dom";

const App=()=> {
 const pageSize = 15;
 const apiKey = "0c9a64b381dc446f96f01a4173033b89"; 
    return (
      <div>
        
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} key = "general" pageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News apiKey={apiKey} key = "business" pageSize={pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News apiKey={apiKey} key = "entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News apiKey={apiKey} key = "general" pageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/health" element={<News apiKey={apiKey} key = "health" pageSize={pageSize} country="in" category="health"/>} />
        <Route exact path="/science" element={<News apiKey={apiKey} key = "science" pageSize={pageSize} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News apiKey={apiKey} key = "sports" pageSize={pageSize} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News apiKey={apiKey} key = "technology" pageSize={pageSize} country="in" category="technology"/>} />
           
        </Routes>
        
        
        
        
      </div>
    )
  }

export default App
