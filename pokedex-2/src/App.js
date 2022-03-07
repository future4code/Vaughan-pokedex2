import React from 'react'
import {Header} from './components/Header/Header'
import Router from './routes/Router'
import {ThemeProvider} from "@mui/material/styles/"
import theme from './constants/theme'




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Router />
    </ThemeProvider>
  )
}

export default App