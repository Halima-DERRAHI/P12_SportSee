import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import NavBar from '../NavBar';
import ErrorPage from '../../Pages/ErrorPage';
import VerticalNav from "../../Components/VerticalNav";

function RouterIndex () {
    return (
        <Router>
            <NavBar />
            <VerticalNav />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterIndex