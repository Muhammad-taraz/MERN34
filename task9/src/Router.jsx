import React from 'react'
import { Routes, Route } from "react-router-dom"
import App from './App'

const MainRoutes = () => {
  return (
    <React.Fragment>
     <Routes>
        <Route path ="/"element={<App />}></Route>
     </Routes>
    </React.Fragment>
  )

}

export default MainRoutes