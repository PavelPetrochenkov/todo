import Headers from '../Header/Header'
import styled from 'styled-components'

type PageProps = {
    children: JSX.Element
}

function Page(props: PageProps) {
    return (
        <StyledPage>
            <Headers />
            <Content>{props.children}</Content>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 550px;
    background-color: white;
    box-shadow: 1px 1px 10px rgb(196, 196, 196);
    box-sizing: border-box;
`

export default Page
