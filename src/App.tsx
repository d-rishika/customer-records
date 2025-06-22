import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { formdata } from './types/types';
import { Entryform } from './Compnents/Entryform';
import { loadfromls, savetols } from './Compnents/utils/storage';
import { Container } from '@mui/material';
import { DataTable } from './Compnents/DataTable';

function App() {

  const [datalist,setdatalist]= useState<formdata[]>([]);

  useEffect(()=>{
    const saveddata = loadfromls();

    setdatalist(Array.isArray(saveddata)? saveddata : [])

    // if(saveddata.length>0){
      // setdatalist(saveddata);
    // }
  },[]);

  //save to localstorage
  useEffect(()=>{
    savetols(datalist);
  },[datalist]);
  
  const handlesave = (newEntry : formdata)=>{
    setdatalist((prev)=>[...prev,newEntry])
  }

  return (
    <Container>
      <Entryform onSave={handlesave} />
     <DataTable data={datalist}/>
    </Container>
  );
}

export default App;
