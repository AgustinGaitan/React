import { Routes, Route, Navigate } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <JournalPage/> } />

      {/* Cualquier otra ruta, va a redirigir a / */}
      <Route path="/*" element={ <Navigate to="/"/> } /> 
    
    </Routes>
  )
}
