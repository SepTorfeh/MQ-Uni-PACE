import '../../styles/survey.css'
import { useState, useEffect } from 'react'
import { Box, Grid, Modal } from '@mui/material'
import Persona from './PersonaComponent'
import PersonaProfiles from './PersonaProfiles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchSurveySubmitAsync } from '../../redux/survey/survey-slice'
import { useNavigate } from 'react-router-dom';
import Navbar from '../reusable/Navbar'

const warning = 'image/icons/warning.svg'
const close = 'image/icons/close.svg'

const SurveyWrapper = () => {
    let navigate = useNavigate();
    
    const loading = useAppSelector(state => state.survey.loading);
    const error = useAppSelector(state => state.survey.error);
    //will be used to show errors or spinner for async func call
    const isAuthenticated = useAppSelector(state => !!state.login.token);

    const [personas, setPersonas] = useState<any[]>([])
    const [selectedPersona, setSelectedPersona] = useState('')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/");
        }
        setPersonas(PersonaProfiles)
    }, [])

    const highlight = (id: string) => {
        const persona = personas.find(p => p.id === id)
        const changedPersona = {...persona, 'highlight':!persona.highlight}
        setPersonas(personas.map(persona => persona.id === id ? changedPersona : {...persona, 'highlight':false}))
        id === selectedPersona ? setSelectedPersona('') : setSelectedPersona(id)
    }

    const submit = () => {
        //selectedPersona ? console.log(selectedPersona) : handleOpen()
        const persona: string = selectedPersona;
        selectedPersona ? dispatch(fetchSurveySubmitAsync({ persona })) : handleOpen()
    }

    return (
        <div className="page">
            <Navbar />
            <div className="container">
                <div className="title">Help us customise your experience!</div>
                <div className="desc">Please select which <u>category</u> best describes you.</div>

                <Modal open={open} onClose={handleClose}>
                    <Box className="modal">
                        <div className="modal-title"><img src={warning} className="modal-title-image" />Warning</div>
                        <div className="modal-content">Please select a persona!</div>
                        <img src={close} className="modal-close" onClick={handleClose} />
                    </Box>
                </Modal>

                <Box sx={{ flexGrow: 1 }} style={{ margin:'2em 0em 3em' }}>
                    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 5 }} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
                        {personas.map(p =>
                            <Persona
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                desc={p.desc}
                                icon={p.icon}
                                highlight={p.highlight}
                                setHighlight={() => highlight(p.id)} />
                        )}
                    </Grid>
                </Box>
                <button type="button" className="button" onClick={() => submit()} tabIndex={-1}>Submit</button>
            </div>
        </div>
    )

}

export default SurveyWrapper
