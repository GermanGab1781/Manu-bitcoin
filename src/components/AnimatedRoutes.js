import React from 'react';
import { Route , Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import HomePage from '../pages/HomePage';
import MaterialEducativo from '../pages/MaterialEducativo';
import Notas from '../pages/Notas';

function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/MaterialEducativo' element={<MaterialEducativo/>}/>
            <Route path='/Notas' element={<Notas/>}/>
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes;