import '../../styles/landing-page.css'
import '../../styles/loader.css'
import { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom';
import Navbar from '../reusable/Navbar'

const LoadingWrapper = () => {
    const navigate = useNavigate();

    //will be used to show errors or spinner for async func call
    const isAuthenticated = useAppSelector(state => !!state.login.token);

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
    }, [isAuthenticated])

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard')
        }, 2000)
        return () => clearTimeout(timer);
    }, [])
    
    const loader = 'image/icons/loader.svg'

    return (
        <div className="page">
            <Navbar />
            <img src={loader} className="loading-image" />
        </div>
    )
}

export default LoadingWrapper
