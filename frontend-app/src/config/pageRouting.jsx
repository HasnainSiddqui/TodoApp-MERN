import { BrowserRouter, Route, Routes } from "react-router"
// import { Header } from "../component/Header"
import { About } from "../pages/About"
import {Home} from "../pages/Home"

export let PageRouting = () =>{


return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
)

}
