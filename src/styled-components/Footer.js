import styled from 'styled-components'

export const StyledFooter = styled.ul`
    display: flex;
    align-items: center;
    padding: 0 15px 15px 15px;
    color: rgb(156, 156, 156);
    font-size: 16px;
`

export const Counter = styled.div`
    padding-right: 20px;
`

export const FilterButton = styled.div`
    color: ${props => props.active ? "rgb(66, 66, 66)" : "rgb(156, 156, 156)"};
    padding: 4px 8px;
    margin: 0 10px;
    border: 1px solid ${props => props.active ? "rgb(66, 66, 66)" : "rgb(233, 233, 233)"};
    border-radius: 2px;
    box-shadow: 2px 2px 5px whitesmoke;
    outline: none;

    &:hover{
        border: 1px solid ${props => props.active ? "rgb(66, 66, 66)" : "rgb(194, 194, 194)"};
        cursor: pointer;
    }
`