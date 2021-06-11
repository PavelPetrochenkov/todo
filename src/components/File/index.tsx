import { Button, Icon, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddIcon from '@material-ui/icons/Add'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DropzoneComponent from '../Dropzone'
import Image from '../Image'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getUserId } from '../../redux/selectors/userSelector'

import './index.scss'
import TesseractText from '../TesseractText'
import { createFileAction } from '../../redux/actions/fileAction';

const tempData = `0401060
Поступ. в банк. плат. Слисано со сч. плат.
ПЛАТЕЖНОЕ ПОРУЧЕНИЕ № 120 17.01.2018
Вид
Дата платежа

Сумма Пятьсот тысяч рублей
прописью
ИНН123456 7890 к1121001001 Сузсма $00000.00
Общество с ограниченной
ответственностью «Исполнитель
госкотрактов»

Сз. № 12345678987654321012
Плательшик
АКБ «Надежный» 012342578

Сз. № 12345678987654321012
Банк плательщика`

export default function File() {
  const [files, setFiles] = useState([])
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [number, setNumber] = useState('')
  const [fields, setFields] = useState<any>([])

  const dispatch = useDispatch()

  const userId: string = useSelector(getUserId)

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

  useEffect(() => {
    setText(tempData)
  }, [files])

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
    dispatch(createFileAction.request({text, name, date, desc, number, fields, userId, file:files[0]}))
  }

  const [age, setAge] = React.useState<string | number>('URK');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="file-section">
      <div className="file-section-title">Create file</div>
      <div className="file-section-content">
      {files.length ? (
        <>
          <div className="file-section__left">
            <div className='file-section__img'>
              <Image file={files[0]} />
            </div>
            <div className='file-section__textarea'>
             <TesseractText text={text}/>
            </div>
          </div>
          <div className="file-section__right">
            <div className="file-section__input">
              <TextField label="Name" onChange={handleName} variant="outlined" />
            </div>
            <div className="file-section__input">
              <TextField label="Number" onChange={handleNumber} variant="outlined" />
            </div>
            <div className="file-section__input">
              <TextField label="Description" onChange={handleDesc} variant="outlined" />
            </div>
            <div className="file-section__input">
              <TextField  label="Date" onChange={handleDate} variant="outlined" />
            </div>
            <div className="file-section__input">
              Добавить поле:
              <Button variant="contained" color="primary" endIcon={<AddIcon />} onClick={handleAddField}>
                Добавить
              </Button>
            </div>
            {fields.map((field:any, idx:any) => 
            <div className="file-section__input__new" key={idx}>
              <TextField
                id={idx}
                label="Название поля"
                variant="outlined"
                style={{ width: '300px' }}
                value={field.title}
                onChange={handleFieldTitle}
              />
              <TextField
                id={idx}
                label="Значение поля"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                style={{ padding: '0 10px', width: '300px' }}
                value={field.value}
                onChange={handleFieldValue}
              />
               <Button variant="contained" color="secondary" endIcon={<DeleteForeverIcon />} onClick={handleDeleteValue} id={idx}>
                Delete
              </Button>
            </div>
          )}  
              <Button variant="contained" color="primary" endIcon={<AddIcon />} onClick={handleSave}>
                Save
              </Button>
           </div>
        </>
      ) : (
        <div className="drag-n-drop">
        <div className="drag-n-drop__title">Choose file what you want to process</div>
        <div className='select-lang'>
          <Button  onClick={handleOpen}>
        Language:
      </Button>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value={'UKR'}>
            UKR
          </MenuItem>
          <MenuItem value={'RU'} disabled>RU</MenuItem>
          <MenuItem value={'ENG'} disabled>ENG</MenuItem>
        </Select>
      </FormControl>
        </div>
          <DropzoneComponent onSend={setFiles} />
        </div>
      )}
      </div>
    </div>
  )
}
