import '../../styles/animation.css'
import { useState, useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'


const DashboardWrapper = () => {

    const navigate = useNavigate()
    const isAuthenticated = useAppSelector(state => !!state.login.token)

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/');
        }
    }, [isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="page">
            <Navbar />
            <div className="container">
            <div className="left animated fadeInDown">[Dashboard goes here]</div>
            </div>
        </div>
    )
}

export default DashboardWrapper