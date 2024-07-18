import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NavBar from "./NavBar";
import Page3 from "./Page3";
import Page4 from "./Page4";
import NoMatch from "./NoMatch";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Navigate to = "page1"/>}/>
                <Route path="/page1" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3/:name" element={<Page3 singerID={'101'}/>}/>
                <Route path="/page4/:singerID" element={<Page4/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
    );
}

export default App;
