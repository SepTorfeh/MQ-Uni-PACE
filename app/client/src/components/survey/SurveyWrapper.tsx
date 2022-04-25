import '../../styles/survey.css'
import { useState, useEffect } from 'react'
import { Container, Box, Grid, Modal } from '@mui/material'
import Persona from './PersonaComponent'
import PersonaProfiles from './PersonaProfiles'

const logo = 'image/logo.svg'
const warning = 'image/icons/warning.svg'
const close = 'image/icons/close.svg'

const SurveyWrapper = () => {

    const [personas, setPersonas] = useState<any[]>([])
    const [selectedPersona, setSelectedPersona] = useState('')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        setPersonas(PersonaProfiles)
    }, [])

    const highlight = (id: string) => {
        const persona = personas.find(p => p.id === id)
        const changedPersona = {...persona, 'highlight':!persona.highlight}
        setPersonas(personas.map(persona => persona.id === id ? changedPersona : {...persona, 'highlight':false}))
        id === selectedPersona ? setSelectedPersona('') : setSelectedPersona(id)
    }

    const submit = () => {
        selectedPersona ? console.log(selectedPersona) : handleOpen()
    }

    return (
        <div className="page">
            <div className="navbar">
                <img src={logo} />
                <div className="user-circle">MT</div>
            </div>
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

                <br /><br />

                <Box sx={{ flexGrow: 1 }} style={{ marginBottom:'3em' }}>
                    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 5 }} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
                        {personas.map(p =>
                            <Persona
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                desc={p.desc}
                                icon={p.icon}
                                highlight={p.highlight}
                                setHighlight={() => highlight(p.id)}></Persona>
                        )}
                    </Grid>
                </Box>
                <button type="button" className="button" onClick={() => submit()} tabIndex={-1}>Submit</button>
            </div>
        </div>
    )

}

export default SurveyWrapper;
