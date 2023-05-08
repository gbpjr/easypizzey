import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'

export const AppRoutes = () => {
  return (
    <Route path='/' element={<Home/>} />
  )
}