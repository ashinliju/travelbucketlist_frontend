import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Calender from './pages/Calender'
import Report from './pages/Report'
import Register from './pages/Register'
import Login from './pages/Login'
import AuthLayout from './components/AuthLayout'
import MainLayout from './components/MainLayout'
import BucketList from './pages/BucketList'
import Edit from './pages/Edit'
import View from './pages/View'
import Downloads from './pages/Downloads'




function App() {

  return (
    <> 
  

       <Routes>
        {/* Login and Register without Header/Footer */}
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>


        {/* Other pages with Header/Footer */}
      <Route element={<MainLayout />}>
  <Route path="/home" element={<Home />} />
  <Route path="/destination" element={<Destination />} />
  <Route path="/calender" element={<Calender />} />
  <Route path="/report" element={<Report />} />
  <Route path="/bucketlist" element={<BucketList />} />
  <Route path="/edit" element={<Edit />} />
  <Route path="/view" element={<View />} />
  <Route path="/downloads" element={<Downloads />} />
</Route>


      </Routes>


      {/* Your existing App content here */}



     

    </>
  )
}

export default App
