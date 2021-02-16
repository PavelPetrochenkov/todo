import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logIn } from '../../../redux/actions/userAction'
import { isLogInError } from '../../../redux/selectors/userSelector';

function Login() {

    const dispatch = useDispatch();

    const [inputEmailValue, setInputEmailValue] = useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = useState<string>('');

    const [validEmailValue, setValidEmailValue] = useState<string>('');
    const [validPasswordValue, setValidPasswordValue] = useState<string>('');

    const isError:boolean = useSelector(isLogInError);

    const handleChangeEmail = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEmailValue(e.target.value);
        validateField('email', e.target.value);
    }, [inputEmailValue]);

    const handleChangePassword = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputPasswordValue(e.target.value);
        validateField('password', e.target.value);
    }, [inputPasswordValue]);

    const handleClickLogIn = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        validateField('email', inputEmailValue);
        validateField('password', inputPasswordValue);
        !validEmailValue.length && !validPasswordValue.length && doLogIn()
    }, [validEmailValue, validPasswordValue]);

    const doLogIn = useCallback(() => {
        dispatch(logIn({
            id: Date.now().toString(),
            login: inputEmailValue,
            password: inputPasswordValue
        }));
        setInputEmailValue('');
        setInputPasswordValue('');
    },[inputEmailValue, inputPasswordValue])

    const validateField = useCallback((fieldName:string, value:string) => {
        switch(fieldName) {
          case 'email':
            if(value === ''){
                setValidEmailValue('Please fill out this field'); 
                break;
            }
            value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? setValidEmailValue('')
            : setValidEmailValue('Email is invalid');
            break;
          case 'password':
            if(value === ''){
                setValidPasswordValue('Please fill out this field'); 
                break;
            }
            value.length >= 6
            ? setValidPasswordValue('')
            : setValidPasswordValue('Password is too short')
            break;
          default:
            break;
        }
      },[])

    return (
        <StyledLogin>
             <Title>Authorization</Title>
             {isError && <ErrorTitleSpan>Authorization was fail</ErrorTitleSpan>}
            <Form>
                {
                    !!validEmailValue.length && <ErrorSpan>{validEmailValue}</ErrorSpan>
                }
                <Input type="text" placeholder="Email" 
                value={inputEmailValue} 
                onChange={handleChangeEmail}
                />
                 {
                    !!validPasswordValue.length && <ErrorSpan>{validPasswordValue}</ErrorSpan>
                }
                <Input type="password" placeholder="Password" 
                value={inputPasswordValue}
                onChange={handleChangePassword}/>
                <LogIn
                onClick={handleClickLogIn}
                >Log in</LogIn>
            </Form>
            <Hr/>
                <CreateNewAccount>Create new account</CreateNewAccount>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
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
        opacity:1;
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
    line-height: 36px;
    width:90%;
    margin: 15px 0 10px 0;

    :hover{
        cursor:pointer;
        background:#2b4d91;
    }
`

const CreateNewAccount = styled(Button)`
    background-color: #3da529;
    border: none;
    border-radius: 6px;
    line-height: 32px;
    margin: 10px 0 30px 0;

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
const ErrorTitleSpan = styled(ErrorSpan)`
    font-size:28px;
`
export default Login
