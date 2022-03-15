import React from 'react';
import styled from 'styled-components';

const StyledLoginImage = styled.div`


`

const image = "image/loginImage.svg"

const LoginImage = () => {

    return (
            <StyledLoginImage>
                <img src={image} />
            </StyledLoginImage>
    )

}

export default LoginImage;
