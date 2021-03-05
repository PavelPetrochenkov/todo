import Headers from '../Header/Header'
import styled from 'styled-components'
import { device } from '../../../device'

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
  min-width: 320px;
`

const Content = styled.div`
  background-color: white;
  box-shadow: 1px 1px 10px rgb(196, 196, 196);
  box-sizing: border-box;
  width: 550px;
  min-width: 320px;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 100%;
  }
`

export default Page
