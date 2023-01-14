import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from './pages/Home'
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Update from "./pages/Update";
import Bruteforce from "./pages/bruteforce";
import Login from "./pages/components/login";
import Signup from "./pages/signup";

function App () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/bruteforce.html" element={<Bruteforce/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}

export default App