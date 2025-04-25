import React from 'react'
import Navbar from './components/navBar/navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './features/landing/Hero'
import RegisterPage from './features/auth/pages/RegisterPage'
import LoginPage from './features/auth/pages/LoginPage'
import Dashboard from './features/dashboard/Main/Dashboard'
import Client from './features/dashboard/client/Client'
import Logs from './features/dashboard/Logs/Logs'
import Projects from './features/dashboard/projects/Projects'
import Reminders from './features/dashboard/reminders/Reminders'
import Settings from './features/dashboard/settings/Settings'
// import RegisterPage from './features/auth/pages/RegisterPage'

function App() {

  return (
    <React.Fragment>
    <div className="min-h-screen bg-background text-foreground dark: dark:text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
    </React.Fragment>
  )
}

export default App
