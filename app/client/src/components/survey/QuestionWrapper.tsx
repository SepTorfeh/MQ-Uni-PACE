import '../../styles/question.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import QuestionComponent from './QuestionComponent'
import QuestionList from './QuestionList'


const QuestionWrapper = () => {

    const navigate = useNavigate()

    const [data, setData] = useState<any[]>([])

    const submit = () => {
        alert(data)
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