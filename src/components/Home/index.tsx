import { Button, InputAdornment, TextField } from '@material-ui/core';
import { GridSearchIcon } from '@material-ui/data-grid';
import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import Table from '../Table'
import styled from 'styled-components'
import { getAllFilesAction } from '../../redux/actions/fileAction';
import { getUserId } from '../../redux/selectors/userSelector'
import { getFilesList } from '../../redux/selectors/fileSelectors ';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './index.scss'

const columns = [
  { field: 'number', headerName: '№', width: 100 },
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'desc', headerName: 'Description', width: 150 },
  {
    field: 'date',
    headerName: 'Date',
    width: 190,
  },
  {
    field: "View",
    headerName: "View",
    renderCell: (params:any) => (
      <>
       <Link to={`/file/info/${params.id}`} className='view-btn'>
          <Button className='view-btn'><VisibilityIcon/></Button>
        </Link>
      </>
    ),
    width: '100px',
  },
];

function Home() {
  const userId: string = useSelector(getUserId)

  const dispatch = useDispatch()

  useEffect(() => {
    if(userId){dispatch(getAllFilesAction.request(userId))}
  }, [])


  const files: any = useSelector(getFilesList)

	const [searchValue, setSearchValue] = useState('')
	const [preparedRows, setPreparedRows] = useState(files)

  useEffect(() => {
    setPreparedRows(files)
  }, [files])
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreparedRows(files.filter((row:any) => ((row.number?.toString().includes(e.target.value) 
    || row.name?.toString().includes(e.target.value) 
    || row.date?.toString().includes(e.target.value)
    || row.desc?.toString().includes(e.target.value)
    ))
    ))
    setSearchValue(e.target.value)
  }


  return (
    <Section>
      <div className='home-section__title'>List of Taxes</div>
    <HeaderSection>
    <StyledSearchSection>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GridSearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchValue}
        onChange={handleSearch}
      />
    </StyledSearchSection>
    </HeaderSection>
    {preparedRows.length?<Table columns={columns} rows={preparedRows}/>:null}
    </Section>
  )
}

const Section = styled.div`
width:90%;
margin:auto;
padding: 30px 0;
`

const StyledSearchSection = styled.div`
display:flex;
align-items:end;
justify-content:space-between;
padding:0 20px;
`

const HeaderSection = styled.div`
padding:10px;
`

export default Home
