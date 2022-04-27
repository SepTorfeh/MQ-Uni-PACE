import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWrapper from './components/login/LoginWrapper';
import SurveyWrapper from './components/survey/SurveyWrapper';
import LandingWrapper from './components/landing_page/LandingWrapper';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/survey" element={<SurveyWrapper />} />
            <Route path="/landing-page" element={<LandingWrapper />} />
        </Routes> 
    </BrowserRouter>

 );
}

export default App;
