import '../../styles/landing-page.css'
import '../../styles/animation.css'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchSurveySubmitAsync } from '../../redux/survey/survey-slice'
import { useNavigate } from 'react-router-dom';
import Navbar from '../reusable/Navbar'

const LandingWrapper = () => {
    let navigate = useNavigate();

    //will be used to show errors or spinner for async func call
    const isAuthenticated = useAppSelector(state => !!state.login.token);

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/");
        }
    }, [isAuthenticated])

    const nextPage = () => {
        navigate('/persona')
    }

    const landing_image = 'image/landing_image.svg'

    return (
        <div className="landing-page">
            <Navbar />
            <div className="landing-title">
                <div className="left animated fadeInDown delay-1">Welcome to Faethm!</div>
                <div className="right animated fadeInUp delay-3">We'll ask you a few questions to get to know you better!</div>
                <div className="right animated fadeInUp delay-6"><button type="button" className="button green-button" onClick={() => nextPage()} tabIndex={-1}>Fire away!</button></div>
            </div>
            <div className="landing-container">
                <img src={landing_image} className="landing-image" />
            </div>
        </div>
    )
}

export default LandingWrapper
