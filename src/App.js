import React from "react";
import { BrowserRouter} from "react-router-dom";
import './index.css'
import Nav from "./components/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";


function App(){
return(
    <BrowserRouter>
        <Nav/>
        <AnimatedRoutes/>
        <Footer/>
    </BrowserRouter>
);
}
export default App;
