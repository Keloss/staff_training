import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { Context } from "./index";
import {observer} from 'mobx-react-lite';
import {check} from './http/employerAPI';
import { Spinner } from "react-bootstrap";
const App = observer(() => {
  
  const {employer} = useContext(Context)
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    try {
      const isAuth = await check()
      if (isAuth) {
        employer.setEmployer(isAuth)
        employer.setIsAuth(true)
      }
    } catch(e)
    {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(loading){
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
