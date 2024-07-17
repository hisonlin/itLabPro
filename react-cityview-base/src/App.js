import './App.scss';
import {Route, Routes} from "react-router-dom";
import ImagePage from "./ImagePage";
import React from "react";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<ImagePage />} />
            </Routes>

        </div>

    );

}

export default App;
