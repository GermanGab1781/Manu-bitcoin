import React from "react";
import { BrowserRouter} from "react-router-dom";
import './index.css'
import Nav from "./components/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App(){
return(
    <BrowserRouter>
        <Nav/>
        <AnimatedRoutes/>
    </BrowserRouter>
);
}
export default App;
