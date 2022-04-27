import styled from 'styled-components';

const StyledLoginButton = styled.button`
    appearance: button;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 24px;
    font-weight: 500;
    box-sizing: border-box;
    border-radius: 8px;
    min-width: 72px;
    width: 100%;
    padding: 12px 24px;
    outline-color: rgb(0, 181, 172);
    outline-offset: 4px;
    transition: all 0.1s ease-in-out 0s;
    background: rgb(0, 181, 172);
    color: rgb(255, 255, 255);
    border: 1px solid rgba(255, 255, 255, 0);
    fill: rgb(255, 255, 255);
    text-decoration: none;
    text-transform: none;
    overflow: visible;
    margin: 0px;
`

export const LoginButton = ({txt}:{txt:string;}) => {
    return (
        <StyledLoginButton type="submit" className="button" tabIndex={-1} >{txt}</StyledLoginButton>
    )
}
