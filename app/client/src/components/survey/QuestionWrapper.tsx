import '../../styles/question.css'
import { useState, useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import QuestionComponent from './QuestionComponent'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'


const QuestionWrapper = () => {

    const navigate = useNavigate()
    const isAuthenticated = useAppSelector(state => !!state.login.token)

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
    }, [isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps

    const [data, setData] = useState<any[]>([])

    const submit = () => {
        // Please connect to db - Lance
        console.log(data)
        navigate('/loading')
    }

    return (
        <div className="page">
            <Navbar />
            <div className="container">
                <QuestionComponent data={setData} />
                {/*<button type="button" className="button green-button" onClick={() => navigate('/persona')} tabIndex={-1}>Back</button>*/}
                <button type="button" className="button green-button float-right" onClick={() => submit()} tabIndex={-1}>Submit</button>
            </div>
        </div>
    )
}

export default QuestionWrapper