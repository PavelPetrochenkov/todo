import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Show from '../../../icon/Show.png'
import Hide from '../../../icon/Hide.png'
import { validateField } from '../../../validations/registrationValid';

function Registration() {

    const [inputEmailValue, setInputEmailValue] = useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState<string>('');

    const [validEmailValue, setValidEmailValue] = useState<string>('');
    const [validPasswordValue, setValidPasswordValue] = useState<string>('');
    const [validConfirmPasswordValue, setValidConfirmPasswordValue] = useState<string>('');

    const [isHideMode, setIsHideMode] = useState<boolean>(false);
    const [isHideModeConfirm, setIsHideModeConfirm] = useState<boolean>(false);

    const handleChangeEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEmailValue(e.target.value);
        setValidEmailValue(validateField('email', e.target.value));
    }, []);

    const handleChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswordValue(e.target.value);
        setValidPasswordValue(validateField('password', e.target.value));
    }, []);

    const handleChangeConfirmPassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputConfirmPasswordValue(e.target.value);
        setValidConfirmPasswordValue(validateField('confirm-password', e.target.value, inputPasswordValue));
    }, [inputPasswordValue]);

    const handleClickRegistration = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setValidEmailValue(validateField('email', inputEmailValue));
        setValidPasswordValue(validateField('password', inputPasswordValue));
        setValidConfirmPasswordValue(validateField('confirm-password', inputConfirmPasswordValue, inputPasswordValue));
        !!validEmailValue && !!validPasswordValue && !!validPasswordValue && doRegister()
    }, [inputEmailValue, inputPasswordValue, inputConfirmPasswordValue,
        validEmailValue, validPasswordValue, validPasswordValue])


    const doRegister = useCallback(() => {
        setInputEmailValue('');
        setInputPasswordValue('');
        setInputConfirmPasswordValue('');
    },[])

    const handleClickHideEye = (e:any) => {
        if(e.target.parentNode.firstChild.type === 'text'){
            e.target.parentNode.firstChild.type = 'password';
            setIsHideMode(false)
        } else {
            e.target.parentNode.firstChild.type = 'text';
            setIsHideMode(true)
        }
    }

    const handleClickConfirmHideEye = (e:any) => {
        if(e.target.parentNode.firstChild.type === 'text'){
            e.target.parentNode.firstChild.type = 'password';
            setIsHideModeConfirm(false)
        } else {
            e.target.parentNode.firstChild.type = 'text';
            setIsHideModeConfirm(true)
        }
    }

    return (
        <StyledRegistration>
             <Title>Registration</Title>
            <Form>
                {
                    <ErrorSpan>{validEmailValue}</ErrorSpan>
                }
                <Input type="text" placeholder="Email" 
                value={inputEmailValue} 
                onChange={handleChangeEmail}
                />
                 {
                    <ErrorSpan>{validPasswordValue}</ErrorSpan>
                }
                 <InputArea>
                <Input type="password" placeholder="Password" 
                value={inputPasswordValue}
                onChange={handleChangePassword}/>
                <HideEye onClick={handleClickHideEye} show={isHideMode}/>
                </InputArea>
                 {
                    <ErrorSpan>{validConfirmPasswordValue}</ErrorSpan>
                }
                 <InputArea>
                <Input type="password" placeholder="Password" 
                value={inputConfirmPasswordValue}
                onChange={handleChangeConfirmPassword}/>
                 <HideEye onClick={handleClickConfirmHideEye} show={isHideModeConfirm}/>
                </InputArea>
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

export default Registration
