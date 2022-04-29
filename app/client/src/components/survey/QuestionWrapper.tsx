import '../../styles/question.css'
import { useState, useEffect } from 'react'
import Navbar from '../reusable/Navbar'
import QuestionComponent from './QuestionComponent'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'
import CustomModal from '../reusable/CustomModal'

const QuestionWrapper = () => {

    const navigate = useNavigate()
    const isAuthenticated = useAppSelector(state => !!state.login.token)

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
        console.log(data)
        validation ? navigate('/loading') : handleOpen()
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