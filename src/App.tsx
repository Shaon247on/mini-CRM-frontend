import React from 'react'
import Navbar from './components/ui/navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './features/landing/Hero'
import RegisterPage from './features/auth/pages/RegisterPage'
// import RegisterPage from './features/auth/pages/RegisterPage'

function App() {

  return (
    <React.Fragment>
    <div className="min-h-screen bg-background text-foreground dark: dark:text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
    </React.Fragment>
  )
}

export default App
