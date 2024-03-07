import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AboutComponent from "./pages/AboutComponent";
import AddStudentComponet from "./pages/AddStudentComponent";
import UpdateComponent from "./pages/UpdateComponent";


function RouterComponent(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/add-student" element={<AddStudentComponet />} />
                <Route path="/update-student/:id" element={<UpdateComponent />} />

            </Routes>
        </div>
    )
}

export default RouterComponent;