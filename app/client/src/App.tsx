import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWrapper from './components/login/LoginWrapper';
import PersonaWrapper from './components/survey/PersonaWrapper';
import LandingWrapper from './components/landing_page/LandingWrapper';
import QuestionWrapper from './components/survey/QuestionWrapper';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/landing-page" element={<LandingWrapper />} />
            <Route path="/persona" element={<PersonaWrapper />} />
            <Route path="/question" element={<QuestionWrapper />} />
        </Routes> 
    </BrowserRouter>

 );
}

export default App;
