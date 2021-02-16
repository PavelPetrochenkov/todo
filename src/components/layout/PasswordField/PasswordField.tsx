import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Show from '../../../icon/Show.png'
import Hide from '../../../icon/Hide.png'

type passwordFieldProps = {
    isHideMode:boolean,
    setHideMode:(val:boolean) => void,
    value:string,
    setValue:(val:string) => void,
    handleKeyPress?:(e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholderValue?:string
}

function PasswordField({isHideMode, setHideMode, value, setValue, handleKeyPress, placeholderValue}:passwordFieldProps) {

    const handleChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [value]);

    const handleClickHideEye = () => {
        setHideMode(!isHideMode)
    }

    return (
        <InputArea>
        <Input type={!isHideMode ? "password" : 'text'} 
        placeholder={placeholderValue || "Password"} 
        value={value}
        onChange={handleKeyPress || handleChangePassword}/>
        <HideEye onClick={handleClickHideEye} show={isHideMode}/>
        </InputArea>
    )
}


const InputArea = styled.div`
    position:relative;
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
`

const HideEye = styled.div<{show?:boolean}>`
    position:absolute;
    right: 7%;
    height:30px;
    width:30px;
    background-image: url(${props => props.show ? Show : Hide});
    background-size: 30px 30px;
    background-position: center;
    background-repeat: no-repeat;
    z-index:2;

    :hover{
        cursor:pointer;
    }
`
const Input = styled.input`
    margin:5px;
    font-size:18px;
    line-height: 36px;
    outline:none;
    width:85%;
    box-sizing:border;
    opacity:0.6;
    padding:0 15px;

    ::first-letter{
        margin-left:5px;
    }

    ::placeholder {
        opacity:0.6;
    }

    :focus{
        opacity:1;
    }
`

export default PasswordField
