import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { validateField, isInputEmpty } from '../../validations/registrationValid';
import PasswordField from '../layout/PasswordField/PasswordField'

function Registration() {

    const [inputEmailValue, setInputEmailValue] = useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>('');

    const [errorEmailValue, setErrorEmailValue] = useState<string>('');
    const [errorPasswordValue, setErrorPasswordValue] = useState<string>('');
    const [errorConfirmPasswordValue, setErrorConfirmPasswordValue] = useState<string>('');

    const [isHideMode, setIsHideMode] = useState<boolean>(false);
    const [isHideModeConfirm, setIsHideModeConfirm] = useState<boolean>(false);

    const handleChangeEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEmailValue(e.target.value);
        setErrorEmailValue(validateField('email', e.target.value));
    }, []);

    const handleChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswordValue(e.target.value);
        setErrorPasswordValue(validateField('password', e.target.value));
        !!inputConfirmPasswordValue && 
        setErrorConfirmPasswordValue(validateField('confirm-password', inputConfirmPasswordValue, e.target.value));
    }, [inputConfirmPasswordValue]);

    const handleChangeConfirmPassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputConfirmPasswordValue(e.target.value);
        setErrorConfirmPasswordValue(validateField('confirm-password', e.target.value, inputPasswordValue));
    }, [inputPasswordValue]);

    const handleClickRegistration = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        checkAllField();
        if(!errorEmailValue && !errorPasswordValue && !errorConfirmPasswordValue){
            doRegister()
        }
    }, [errorEmailValue, errorPasswordValue, errorConfirmPasswordValue])

    const checkAllField = useCallback(() => {
        if(!errorEmailValue){
            setErrorEmailValue(isInputEmpty(inputEmailValue))
        };
        if(!errorPasswordValue){
            setErrorPasswordValue(isInputEmpty(inputPasswordValue))
        };
        if(!errorConfirmPasswordValue){
            setErrorConfirmPasswordValue(isInputEmpty(inputConfirmPasswordValue))
        };
    }, [errorEmailValue, errorPasswordValue, errorConfirmPasswordValue,
        inputEmailValue, inputPasswordValue, inputConfirmPasswordValue])

    const doRegister = useCallback(() => {
        setInputEmailValue('');
        setInputPasswordValue('');
        setInputConfirmPasswordValue('');
    },[])

    return (
        <StyledRegistration>
             <Title>Registration</Title>
            <Form>
                {
                    <ErrorSpan>{errorEmailValue}</ErrorSpan>
                }
                <Input type="text" placeholder="Email" 
                value={inputEmailValue} 
                onChange={handleChangeEmail}
                />
                 {
                    <ErrorSpan>{errorPasswordValue}</ErrorSpan>
                }
                <PasswordField value={inputPasswordValue} setValue={setInputPasswordValue}
                isHideMode={isHideMode} setHideMode={setIsHideMode}
                handleKeyPress={handleChangePassword}/>
                 {
                    <ErrorSpan>{errorConfirmPasswordValue}</ErrorSpan>
                }
                <PasswordField value={inputConfirmPasswordValue} setValue={setInputConfirmPasswordValue}
                isHideMode={isHideModeConfirm} setHideMode={setIsHideModeConfirm}
                handleKeyPress={handleChangeConfirmPassword}
                placeholderValue='Confirm password'/>
                <CreateNewAccount
                onClick={handleClickRegistration}
                >Registration</CreateNewAccount>
            </Form>
            <Hr/>
                <LogIn>Log In</LogIn>
        </StyledRegistration>
    )
}

const StyledRegistration = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`

const Form = styled.form`
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
        opacity:0.9;
    }
`

const Button = styled.button`
    width:50%;
    align-items:center;
    font-size:18px;
    color:white;
    outline:none;
    transition:1s;

`

const LogIn = styled(Button)`
    background:#4267b2;
    border: none;

    border-radius: 6px;
    line-height: 32px;
    margin: 10px 0 30px 0;

    :hover{
        cursor:pointer;
        background:#2b4d91;
    }
`

const CreateNewAccount = styled(Button)`
    background-color: #3da529;
    border: none;
    border-radius: 6px;
    line-height: 36px;
    width:90%;
    margin: 15px 0 10px 0;

    :hover{
        cursor:pointer;
        background:#409130;
    }
`

const Hr = styled.hr`
    width:100%;
    border:none;
    border-top:1px solid black;
    opacity:0.2;
`

const ErrorSpan = styled.span`
    width:90%;
    color:rgb(130, 0, 0);
`

export default Registration
