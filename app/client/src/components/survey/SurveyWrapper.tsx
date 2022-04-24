import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import { useState } from 'react'

const logo = 'image/logo.svg'
const icon_executive = 'image/icons/executive.svg'
const icon_manager = 'image/icons/manager.svg'
const icon_workforce_planner = 'image/icons/workforce_planner.svg'
const icon_head_of_division = 'image/icons/head_of_division.svg'
const icon_employee = 'image/icons/employee.svg'
const icon_hr = 'image/icons/hr.svg'
const icon_data_analyst = 'image/icons/data_analyst.svg'
const icon_learning_manager = 'image/icons/learning_manager.svg'
const icon_automation_engineer = 'image/icons/automation_engineer.svg'

const SurveyWrapper = () => {

    const [selectedPersona, setSelectedPersona] = useState('')

    const page = {
        background: '#F1F3F7',
        width: '100%',
        height: '100%',
        fontSize: '0.9vw',
    }
    const navbar = {
        background: '#092E3B',
        color: 'white',
        padding: '1.5em 2em'
    }
    const container = {
        padding: '1.5em 4em',
        height: '100%'
    }
    const persona = {
        background: '#E2E2E2',
        border: '0.15em solid #989898',
        display: 'flex',
        padding: '0.5em 2em',
        height: '100%',
        alignItems: 'center',
    }
    const icon = {
        padding: '0px 3vw 0px 0px',
        height: '8vw'
    }
    const content = {
    }
    const buttonStyle = {
        float:'right',
        background:'#4FB4AC',
        fontSize: 'inherit',
        width: '10vw',
        height: '3vw',
        ':hover': {
            bgcolor: '#33C4BD',
            color: 'white',
        },
    }

    const highlight = (persona: string) => {
        if (selectedPersona !== '') {
            document.getElementById(selectedPersona)!.style.border = '0.15em solid #989898'
        }
        document.getElementById(persona)!.style.border = '0.15em solid #4FB4AC'
        setSelectedPersona(persona)
    }

    const submit = () => {
        console.log(selectedPersona)
    }

    return (
        <div style={page}>
            <div style={navbar}>
                <img src={logo} style={{width: '10%'}} />
            </div>
            <div style={container}>
                <p><b>Help us customise your experience!</b></p>
                <p>Please select which <u>category</u> best describes you.</p>
                <br /><br />

                <Box sx={{ flexGrow: 1 }} style={{marginBottom:'3vw'}}>
                    <Grid container rowSpacing={{ xs: 1, sm: 3, md: 5 }} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='executive' style={persona} onClick={() => highlight('executive')}>
                                <img src={icon_executive} style={icon} />
                                <div style={content}>
                                    <b>Executive</b>
                                    <p>An executive directs, plans, and coordinates operational activities for their organization or company and are normally responsible for devising policies and strategies to meet company goals.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='manager' style={persona} onClick={() => highlight('manager')}>
                                <img src={icon_manager} style={icon} />
                                <div style={content}>
                                    <b>Manager</b>
                                    <p>A manager ensures that their assigned department, store, or district is well staffed and provisioned, adheres to quality and service standards, increases revenue and market share, and helps the business accomplish its goals.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='workforce_planner' style={persona} onClick={() => highlight('workforce_planner')}>
                                <img src={icon_workforce_planner} style={icon} />
                                <div style={content}>
                                    <b>Workforce Planner</b>
                                    <p>A workforce planner prepares and produces work volume and staffing forecast dashboards, as well as comparative data on results vs. forecasts, identifies opportunities for improvement and recommends solutions.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='head_of_division' style={persona} onClick={() => highlight('head_of_division')}>
                                <img src={icon_head_of_division} style={icon} />
                                <div style={content}>
                                    <b>Head of Division</b>
                                    <p>An executive directs, plans, and coordinates operational activities for their organization or company and are normally responsible for devising policies and strategies to meet company goals.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='employee' style={persona} onClick={() => highlight('employee')}>
                                <img src={icon_employee} style={icon} />
                                <div style={content}>
                                    <b>Employee</b>
                                    <p>An employee performs specific duties and tasks for employers in exchange for compensation. Typically, they work in a full-time, part-time or temporary capacity.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='hr_manager' style={persona} onClick={() => highlight('hr_manager')}>
                                <img src={icon_hr} style={icon} />
                                <div style={content}>
                                    <b>HR Manager</b>
                                    <p>A HR manager is responsible for coordinating all administrative activities related to an organization's personnel. Their duties include developing recruitment strategies, payroll and  onboarding new employees.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='data_analyst' style={persona} onClick={() => highlight('data_analyst')}>
                                <img src={icon_data_analyst} style={icon} />
                                <div style={content}>
                                    <b>Data Analyst</b>
                                    <p>A data analyst gathers data from various sources and then reviews and interprets it using data analysis tools to provide meaningful information and insights to help businesses make better-informed decisions.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='learning_manager' style={persona} onClick={() => highlight('learning_manager')}>
                                <img src={icon_learning_manager} style={icon} />
                                <div style={content}>
                                    <b>Learning Manager</b>
                                    <p>A learning manager evaluates individual and organisational development needs as well as assessing the success of development plans to help employees make the most of learning opportunities.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <div id='automation_manager' style={persona} onClick={() => highlight('automation_manager')}>
                                <img src={icon_automation_engineer} style={icon} />
                                <div style={content}>
                                    <b>Automation Engineer</b>
                                    <p>An automation engineer is someone who delivers automated solutions and software processes. They work closely with other teams to discover and remove any problems by implementing process automation.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <div style={{height:'auto'}}>
                    <Button variant="contained" sx={buttonStyle} onClick={() => submit()}>Submit</Button>
                </div>
            </div>
        </div>
>>>>>>> 87f38ea488632c6c7b3dec85ff9a3b1c32c73168
    )

}

export default SurveyWrapper;
