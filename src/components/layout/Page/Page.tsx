import React from 'react'
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
  width:100%;
  display: flex;
  flex-direction: row;
  min-width: 320px;
`

const Content = styled.div`
  background-color: white;
  box-sizing: border-box;
  width:100%;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 100%;
  }
`

export default Page
