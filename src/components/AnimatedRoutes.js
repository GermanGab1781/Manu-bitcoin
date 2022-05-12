import React from 'react';
import { Route , Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import HomePage from '../pages/HomePage';

function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes;