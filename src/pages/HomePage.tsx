import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Page from '../components/layout/Page/Page'
import Home from '../components/Home'

function HomePage() {
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.refreshToken) history.push('/login')
  }, [])

  return (
    <Page>
      <Home/>
    </Page>
  )
}

export default HomePage
