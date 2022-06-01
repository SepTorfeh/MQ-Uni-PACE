import '../../styles/question.css'
import { useState, useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import QuestionComponent from './QuestionComponent'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'
import CustomModal from '../reusable/CustomModal'
import {fetchSurveySubmitAsync} from '../../redux/survey/survey-slice'

const QuestionWrapper = () => {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const isAuthenticated = useAppSelector(state => !!state.login.token)
    const persona = useAppSelector(state => state.survey.persona!);

    const [data, setData] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
    }, [isAuthenticated])

    // Please pass data to the db - Lance
    const submit = () => {
        const validation = !data.some(el => el < 0)
        // Please pass data to Redux - Lance
        sessionStorage.setItem('data', data.toString())
        if(validation){
            dispatch(fetchSurveySubmitAsync({persona, data}));
            navigate('/loading');
        } else {
            handleOpen();
        }
    }

    return (
        <div className="page">
            <Navbar />
            <div className="container">
                <CustomModal error state={open} handleClose={handleClose} content="Your answers will help, we promise!" />
                <QuestionComponent data={setData} />
                {/*<button type="button" className="button green-button" onClick={() => navigate('/persona')} tabIndex={-1}>Back</button>*/}
                <button type="button" className="button green-button float-right" onClick={() => submit()} tabIndex={-1}>Submit</button>
            </div>
        </div>
    )
}

export default QuestionWrapper
