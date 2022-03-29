import styled from "styled-components";
import React from 'react';


const StyledInputWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;
    box-sizing: border-box;

`

const StyledLabel = styled.label`
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 24px;
    display: block;
    color: rgb(107, 130, 137);
    margin-bottom: 8px;

`

const StyledInput = styled.input`
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 24px;
    box-sizing: border-box;
    padding: 12px 16px;
    height: 46px;
    width: 100%;
    color: rgb(58, 88, 98);
    outline: none;
    background: rgb(250, 251, 251);
    flex: 1 0 0%;
    border-radius: 4px;
    border: none;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    cursor: text;
    color: rgb(58, 88, 98);
    border-radius: 4px;
    border: 1px solid rgb(206, 213, 216);
    transition: all 0.2s ease-in-out 0s;
    background: rgb(250, 251, 251);

`

type StyledInputProp = { 
    label:string;
    placeHolder:string;
    inputType:string;
    name:string
}

const StyledInputComponent = ({label, placeHolder, inputType, name}:StyledInputProp) => {

    return (
    <StyledInputWrapper>
        <StyledLabel>
            <label htmlFor={name} >{label}</label>
        </StyledLabel>
        <StyledInput name={name} placeholder={placeHolder} type={inputType} />
        </StyledInputWrapper>
    )
}

export default StyledInputComponent;

export {}
