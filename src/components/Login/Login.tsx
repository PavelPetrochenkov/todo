import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { logIn, clearError } from '../../redux/actions/userAction'
import { isLogInError } from '../../redux/selectors/userSelector'
import PasswordField from '../layout/PasswordField/PasswordField'

function Login() {
    const dispatch = useDispatch()

    const [inputEmailValue, setInputEmailValue] = useState<string>('')

    const [inputPasswordValue, setInputPasswordValue] = useState<string>('')

    const [isHideMode, setIsHideMode] = useState<boolean>(false)

    const isError: boolean = useSelector(isLogInError)

    useEffect(() => {
        dispatch(clearError())
    }, [])

    const handleChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputEmailValue(e.target.value)
        },
        [inputEmailValue]
    )

    const handleClickLogIn = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            doLogIn(inputEmailValue, inputPasswordValue)
            setInputEmailValue('')
            setInputPasswordValue('')
        },
        [inputEmailValue, inputPasswordValue]
    )

    const doLogIn = useCallback((email: string, password: string) => {
        dispatch(
            logIn({
                id: Date.now().toString(),
                login: email,
                password: password,
            })
        )
    }, [])

    return (
        <StyledLogin>
            <Title>Authorization</Title>
            {isError && <ErrorTitleSpan>Authorization was fail</ErrorTitleSpan>}
            <Form>
                <Input
                    type="text"
                    placeholder="Email"
                    value={inputEmailValue}
                    onChange={handleChangeEmail}
                />
                <PasswordField
                    isHideMode={isHideMode}
                    setHideMode={setIsHideMode}
                    value={inputPasswordValue}
                    setValue={setInputPasswordValue}
                />
                <LogIn onClick={handleClickLogIn}>Log in</LogIn>
            </Form>
            <Hr />
            <CreateNewAccount>Create new account</CreateNewAccount>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Title = styled.span`
    text-align: center;
    margin: 10px 0;
    font-size: 32px;
`

const Input = styled.input`
    margin: 5px;
    font-size: 18px;
    line-height: 36px;
    outline: none;
    width: 85%;
    box-sizing: border;
    opacity: 0.6;
    padding: 0 15px;

    ::first-letter {
        margin-left: 5px;
    }

    ::placeholder {
        opacity: 0.6;
    }

    :focus {
        opacity: 1;
    }
`

const Button = styled.button`
    width: 50%;
    align-items: center;
    font-size: 18px;
    color: white;
    outline: none;
    transition: 1s;
`

const LogIn = styled(Button)`
    background: #4267b2;
    border: none;
    border-radius: 6px;
    line-height: 36px;
    width: 90%;
    margin: 15px 0 10px 0;

    :hover {
        cursor: pointer;
        background: #2b4d91;
    }
`

const CreateNewAccount = styled(Button)`
    background-color: #3da529;
    border: none;
    border-radius: 6px;
    line-height: 32px;
    margin: 10px 0 30px 0;

    :hover {
        cursor: pointer;
        background: #409130;
    }
`

const Hr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid black;
    opacity: 0.2;
`

const ErrorSpan = styled.span`
    width: 90%;
    color: rgb(130, 0, 0);
`
const ErrorTitleSpan = styled(ErrorSpan)`
    font-size: 28px;
`

export default Login
