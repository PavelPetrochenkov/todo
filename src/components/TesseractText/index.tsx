import { Button, TextField } from '@material-ui/core'
import React, {useState, useEffect} from 'react'

import './index.scss'

const TesseractText = ({ text }: any) => {

  const [initData, setInitData] = useState(text)
  const [data, setData] = useState(text)

  useEffect(() => {
    setInitData(initData)
    }, [text])

  const handleReset = () => {
    setData(initData)
  }

  const handleTextArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  return (
    <div className="tesseract-text-section">
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        className="tesseract-text-section__textarea"
        multiline
        variant="outlined"
        value={data}
        onChange={handleTextArea}
      />
      <div className="tesseract-text-section__tools">
      <Button variant="outlined" color="primary" onClick={handleReset}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleReset}>
          RESET
        </Button>
      </div>
    </div>
  )
}

export default TesseractText
