import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWrapper from './components/login/LoginWrapper';
import SurveyWrapper from './components/survey/SurveyWrapper';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/survey" element={<SurveyWrapper />} />
        </Routes> 
    </BrowserRouter>

 );
}

export default App;
