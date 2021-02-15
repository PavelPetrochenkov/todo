import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

function Registration() {

    const [inputEmailValue, setInputEmailValue] = useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>('');

    const handleChangeEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEmailValue(e.target.value);
    }, []);

    const handleChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswordValue(e.target.value);
    }, []);

    const handleChangeConfirmPassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputConfirmPasswordValue(e.target.value);
    }, []);

    const handleClickRegistration = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
    }, [])

    return (
        <StyledRegistration>
             <Title>Registration</Title>
            <StyledForm>
                <StyledInput type="text" placeholder="Email" 
                value={inputEmailValue} 
                onChange={handleChangeEmail}
                />
                <StyledInput type="password" placeholder="Password" 
                value={inputPasswordValue}
                onChange={handleChangePassword}/>
                <StyledInput type="password" placeholder="Password" 
                value={inputConfirmPasswordValue}
                onChange={handleChangeConfirmPassword}/>
                <CreateNewAccount
                onClick={handleClickRegistration}
                >Registration</CreateNewAccount>
            </StyledForm>
            <StyledHr/>
                <LogIn>Log In</LogIn>
        </StyledRegistration>
    )
}

const StyledRegistration = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    width:100%;
`

const Title = styled.span`
    text-align:center;
    margin:10px 0;
    font-size:32px;
`

const StyledInput = styled.input`
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
        opacity:0.9;
    }
`

const StyledButton = styled.button`
    width:50%;
    align-items:center;
    font-size:18px;
    color:white;
    outline:none;
    transition:1s;

`

const LogIn = styled(StyledButton)`
    background-color: #1877f2;
    border: none;

    border-radius: 6px;
    line-height: 32px;
    margin: 10px 0 30px 0;

    :hover{
        cursor:pointer;
        background:#4267b2;
    }
`

const CreateNewAccount = styled(StyledButton)`
    background-color: #42b72a;
    border: none;
    border-radius: 6px;
    line-height: 36px;
    width:90%;
    margin: 15px 0 10px 0;

    :hover{
        cursor:pointer;
        background:#3da529;
    }
`

const StyledHr = styled.hr`
    width:100%;
    border:none;
    border-top:1px solid black;
    opacity:0.2;
`

export default Registration
