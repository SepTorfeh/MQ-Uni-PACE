import Grid from '@mui/material/Grid'

type prop = {
    id: string,
    title: string,
    desc: string,
    icon: any,
    highlight: string,
    setHighlight: any
}

const Persona = ({ id, title, desc, icon, highlight, setHighlight }: prop) => {

    let border = {}

    const borderThickness = '0.2em'

    if (highlight) {
        border = { border: borderThickness + ' solid #4FB4AC' }
    } else {
        border = { border: borderThickness + ' solid #989898' }
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <div id={id} className="persona" onClick={setHighlight} style={border}>
                <img src={icon} className="icon" />
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </div>
            </div>
        </Grid>
    )
}

export default Persona