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
            <Route path='/Manu-bitcoin/' element={<HomePage/>}/>
            <Route path='/Manu-bitcoin/MaterialEducativo' element={<MaterialEducativo/>}/>
            <Route path='/Manu-bitcoin/Notas' element={<Notas/>}/>
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes;