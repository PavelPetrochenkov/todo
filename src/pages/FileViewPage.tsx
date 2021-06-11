import React from 'react'
import { createBrowserHistory } from 'history'
import Page from '../components/layout/Page/Page'
import FileView from '../components/FileView'
import { useParams } from 'react-router-dom';

const  FileViewPage=()=> {
  // @ts-ignore
  let { id } = useParams();


const history = createBrowserHistory()

  if(id){
    history.push('/')
  }

  return (
    <Page>
      <FileView id={id}/>
    </Page>
  )
}

export default FileViewPage
