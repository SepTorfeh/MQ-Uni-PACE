import { Box, Modal } from '@mui/material'

const warning = 'image/icons/warning.svg'
const success = 'image/icons/success.svg'
const close = 'image/icons/close.svg'

type prop = {
    error: boolean,
    state: boolean,
    handleClose: any,
    content: string,
}

const CustomModal = ({ error, state, handleClose, content }: prop) => {
    let icon
    error ? icon = warning : icon = success
    return (
        <Modal open={state} onClose={handleClose}>
            <Box className="modal">
                <div className="modal-title"><img src={icon} className="modal-title-image" />Warning</div>
                <div className="modal-content">{content}</div>
                <img src={close} className="modal-close" onClick={handleClose} />
            </Box>
        </Modal>
    )
    
}

export default CustomModal