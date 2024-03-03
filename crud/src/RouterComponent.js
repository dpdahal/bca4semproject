import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AboutComponent from "./pages/AboutComponent";


function RouterComponent(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
            </Routes>
        </div>
    )
}

export default RouterComponent;