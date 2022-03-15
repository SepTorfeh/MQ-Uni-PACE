import React from 'react';
import styled from 'styled-components';
import { mobileMaxWidth } from '../reusable/screenSize';

const StyledLoginImage = styled.div`
    background:rgb(243, 246, 248);
    img{
        width:100%;
        height: 100%;
        overflow: hidden;
    }
    @media (max-width: ${mobileMaxWidth}){
        width: 100%;
        height: 320px;
    }

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
