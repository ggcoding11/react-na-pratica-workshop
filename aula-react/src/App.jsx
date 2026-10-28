import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App