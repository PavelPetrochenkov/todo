import { Button, InputAdornment, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import './index.scss'
import { getUserId } from '../../redux/selectors/userSelector'
import { getFilesList } from '../../redux/selectors/fileSelectors '
import { changeFileAction, getAllFilesAction } from '../../redux/actions/fileAction'
import SettingsIcon from '@material-ui/icons/Settings'
import AddIcon from '@material-ui/icons/Add'
import Image from '../Image'
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function FileView({ id }: any) {
  const [file, setFile] = useState<any>()
  const [isMode, setIsMode] = useState(false)

  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [number, setNumber] = useState('')
  const [fields, setFields] = useState<any>([])

  const userId: string = useSelector(getUserId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getAllFilesAction.request(userId))
    }
  }, [])

  const files: any = useSelector(getFilesList)

  useEffect(() => {
    setFile(files.filter((item: any) => item._id === id)[0])
  }, [])

  useEffect(() => {
    setText(file?.text || '')
    setName(file?.name || '')
    setDate(file?.date || '')
    setDesc(file?.desc || '')
    setNumber(file?.number || '')
    setFields(file?.fields || '')
  }, [file])

  const handleIsMode =() =>{
    setIsMode(!isMode)
  }
  const handleName = (e:any) => {
    setName(e.target.value)
  }
  
  const handleDate = (e:any) => {
    setDate(e.target.value)
  }

  const handleDesc = (e:any) => {
    setDesc(e.target.value)
  }

  const handleNumber = (e:any) => {
    setNumber(e.target.value)
  }

  const handleText = (e:any) => {
    setText(e.target.value)
  }

  const handleAddField = () => {
    setFields([...fields,{title:'', value:''}])
  }

  const handleFieldTitle = (e:any) => {
    setFields(fields.map((item:any, idx:any)=>
      (idx==e.target.id) ? {...item, title:e.target.value}:{...item}
    ))
  }

  const handleFieldValue= (e:any) => {
    setFields(fields.map((item:any, idx:any)=>
      (idx==e.target.id) ? {...item, value:e.target.value}:{...item}
    ))
  }

  const handleDeleteValue= (e:any) => {
    setFields(fields.filter((item:any, idx:any)=>
      idx!=e.target.id
    ))
  }

  const handleSave = (e:any) => {
    dispatch(changeFileAction.request({text, name, date, desc, number, fields, userId, file:file.file}))
  }


  return (
    <div className="file-view-section">
      <div className="file-view-section__title">
        <p>File #{file?._id || ''}</p>
        <Button variant="contained" color="primary" onClick={handleIsMode}>
          <SettingsIcon />
        </Button>
      </div>
      {/* {file?<Image file={file} />:null} */}
      <div className="file-view-section__inp">
        Number:
        <TextField
          className="file-view-section__inp__fld"
          id="number"
          variant="outlined"
          value={number}
          onChange={handleNumber}
        />
      </div>
      <div className="file-view-section__inp">
        Name:
        <TextField
          className="file-view-section__inp__fld"
          id="name"
          variant="outlined"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="file-view-section__inp">
        Description:
        <TextField
          className="file-view-section__inp__fld"
          id="desc"
          variant="outlined"
          value={desc}
          onChange={handleDesc}
        />
      </div>
      <div className="file-view-section__inp">
        Date:
        <TextField
          className="file-view-section__inp__fld"
          id="date"
          variant="outlined"
          value={date}
          onChange={handleDate}
        />
      </div>
      <div className="file-view-section__inp">
        Text:
        <TextField
          className="file-view-section__inp__fld"
          id="text"
          variant="outlined"
          multiline
          value={text}
          onChange={handleText}
        />
      </div>
      <div className="file-view-section__inp">Additional field:</div>
      {isMode? <div className="file-section__input">
              Добавить поле:
              <Button variant="contained" color="primary" endIcon={<AddIcon />} onClick={handleAddField}>
                Добавить
              </Button>
            </div>:null}
      {fields?fields.map((item: any, idx: number) => (
        <div key={idx}><div className="file-view-section__inp">
           <TextField
            className="file-view-section__inp__fld"
            variant="outlined"
            value={item.title}
           onChange={handleFieldTitle}
          />:<TextField
            className="file-view-section__inp__fld"
            variant="outlined"
            value={item.value}
           onChange={handleFieldValue}
          />
        </div>
        <div className="file-view-section__inp__fld-dlt">
        <Button variant="contained" color="secondary" endIcon={<DeleteForeverIcon />} onClick={handleDeleteValue} id={`${idx}`}>
         Delete
       </Button>
       </div>
         </div>
      )):null}
       {isMode?<Button variant="contained" color="primary" onClick={handleSave}>
          <SaveIcon/> Save
        </Button>:null}
    </div>
  )
}
