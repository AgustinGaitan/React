import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    Navigate
  } from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

  
export const AppRouter = () => {
  return (
    <Router>
        <div>

            <NavBar/>
            <div className="container">
              <Routes>
                  <Route path="/" element={<HomeScreen/>} />
                  <Route path="/about" element={<AboutScreen/>} />
                  <Route path="/login" element={<LoginScreen/>} />
                  <Route
                      path="*"
                      element={<Navigate to="/" replace />}
                  />
              </Routes>
            </div>
        </div>
    </Router>
  )
}
