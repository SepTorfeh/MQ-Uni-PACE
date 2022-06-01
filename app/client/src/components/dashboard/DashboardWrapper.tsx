import '../../styles/animation.css'
import '../../styles/dashboard.css'
import { useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import ArticleComponent from './ArticleComponent'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'

const image = 'image/landing_image.svg'

const DashboardWrapper = () => {

    const navigate = useNavigate()
    const isAuthenticated = useAppSelector(state => !!state.login.token)

    let initials
    const firstName = useAppSelector(state => state.login.firstName);
    const lastName = useAppSelector(state => state.login.lastName);

    if(firstName && lastName){
        initials = firstName?.charAt(0) + lastName?.charAt(0);
        initials = initials.toUpperCase();
    } else {
        initials = '';
    }

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
    }, [isAuthenticated])

    return (
        <div className="page">
            <Navbar />
            <div className="container animated fadeInDown">
                <div className="dashboard-grid">
                    <div className="left-col">
                        <div className="user-box">
                            <div className="outer-circle">
                                <div className="inner-circle">
                                    <span className="">{ initials }</span>
                                </div>
                                <div className="user-details">
                                    <span className="bold">{ firstName + ' ' + lastName }</span>
                                    <span>Macquarie University</span>
                                </div>
                            </div>
                        </div>
                        <div className="left-col-content">
                            <div className="banner-title">Did you know?</div>
                            <div className="banner-content">Master of Finance ranked #1 in Australia and #32 globally, Master of Marketing ranked #1 in Australia and #19 globally and Master of Management ranked #2 in Australia and #46 globally (QS Business Masters Rankings, 2022)</div>
                        </div>
                    </div>
                    <div className="middle-col">
                        <div className="banner">
                            <div>
                                <div className="banner-title">Top 20 skills for every job</div>
                                <div className="banner-content">Job profile summaries now include a list of the top 20 most in-demand skills for every job in your workforce.</div>
                                <button type="submit" className="button green-button" tabIndex={-1}>Visit the Job Profiles</button>
                            </div>
                            <div className="banner-image">
                                <img src={image} className="image" />
                            </div>
                        </div>
                        <div className="recommended-title">Recommended for you</div>
                        <div className="recommended">
                            <a href="#"><div className="recommended-card"><i className="fa fa-clipboard"></i>Job Profiles</div></a>
                            <a href="#"><div className="recommended-card"><i className="fa fa-briefcase"></i>Job Corridor</div></a>
                            <a href="#"><div className="recommended-card"><i className="fa fa-gear"></i>Technology Portfolio</div></a>
                            <a href="#"><div className="recommended-card"><i className="fa fa-gears"></i>Automation Impact</div></a>
                            <a href="#"><div className="recommended-card"><i className="fa fa-user-plus"></i>Jobs Added</div></a>
                            <a href="#"><div className="recommended-card"><i className="fa fa-genderless" />Gender Impact</div></a>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="article bold">Faethm Insights</div>
                        <ArticleComponent value={Array.from(Object(sessionStorage.getItem('data')?.split(',')), Number).reduce((a,b) => a+b)} />
                        <div className="article bold">
                            <a href="#">
                                <span className="text-green">
                                    <i className="fa fa-external-link mr-10"></i>More articles        
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper