import styled from 'styled-components'
import arrow from '../icon/ArrowDown.png'

export const InputAddTodo = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1 px solid black;
    outline: none;
    font-size: 24px;
    
    ::placeholder {
        opacity:0.6;
    }
`

export const CheckAllButton = styled.span`
    margin: 0 5px;
    height: 25px;
    min-width: 25px;
    border: 1px solid rgb(150, 150, 150);
    border-radius: 50%;
    background-image: url(${arrow});
    background-size: 25px 25px;
    background-position: center;
    background-position-y: 1px;
    background-repeat: no-repeat;
    opacity: ${props => props.active ? "0.8" : "0.4"};
   
    &:hover{
        cursor: pointer;
        opacity:0.8
    }
`

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid whitesmoke;
    box-shadow: 2px 0 10px whitesmoke;
`