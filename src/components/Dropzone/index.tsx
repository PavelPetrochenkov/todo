import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone  from 'react-dropzone-uploader'
import './index.scss'

const DropzoneComponent = ({onSend}:any) => {
  const getUploadParams = ({ meta }:any) => { return { url: 'https://httpbin.org/post' } }
  
  const handleChangeStatus = ({ meta, file }:any, status:any) => { console.log(status, meta, file) }
  
  const handleSubmit = (files:any) => { console.log(files.map((f:any) => f.meta)); onSend(files) }
 
  return (
    <div className='clean-dropzone'>
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      multiple={false}
      accept="image/*"
    />
    </div>
  )
}

export default DropzoneComponent