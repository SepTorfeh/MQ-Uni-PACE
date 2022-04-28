import '../../styles/persona.css'
import '../../styles/animation.css'
import { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import Persona from './PersonaComponent'
import PersonaProfiles from './PersonaProfiles'
import { useAppDispatch } from '../../redux/hooks'
import { fetchSurveySubmitAsync } from '../../redux/survey/survey-slice'
import { useNavigate } from 'react-router-dom';
import Navbar from '../reusable/Navbar'
import CustomModal from '../reusable/CustomModal'

const PersonaWrapper = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    // Uncomment this when you're done - lance
    //const isAuthenticated = useAppSelector(state => !!state.login.token);
    const isAuthenticated = true;

    const [personas, setPersonas] = useState<any[]>([])
    const [selectedPersona, setSelectedPersona] = useState('')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/');
        }
        setPersonas(PersonaProfiles)
    }, [isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps

    const highlight = (id: string) => {
        const persona = personas.find(p => p.id === id)
        const changedPersona = {...persona, 'highlight':!persona.highlight}
        setPersonas(personas.map(persona => persona.id === id ? changedPersona : {...persona, 'highlight':false}))
        id === selectedPersona ? setSelectedPersona('') : setSelectedPersona(id)
    }

    const next = () => {
        const persona: string = selectedPersona;
        // Uncomment this when you're done - lance
        selectedPersona ? dispatch(fetchSurveySubmitAsync({ persona })) : handleOpen()
        navigate('/question')
    }
   
    return (
        <div className="page">
            <Navbar />
            <div className="container">
                <div className="title">Help us customise your experience!</div>
                <div className="desc">Please select which <u>category</u> best describes you.</div>

                <CustomModal error state={open} handleClose={handleClose} content="Please select a persona!" />

                <Box sx={{ flexGrow: 1 }} style={{ margin:'2em 0em 3em' }}>
                    <Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 5 }}>
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
                <button type="button" className="button green-button float-right" onClick={() => next()} tabIndex={-1}>Next</button>
            </div>
        </div>
    )
}

export default PersonaWrapper
