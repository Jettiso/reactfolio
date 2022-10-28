import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contact";
import Resume from "./pages/Resume";
import SharedLayout from "./pages/SharedLayout";
import "./style.css";

function App() {
    return (
        <div className="appGrid">
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contacts />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="*" />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
