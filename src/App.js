import './App.css';
import {Routes,Route} from "react-router-dom";
import {Navbar,Footer} from "./components/index";
import {Home,Questions,Result,Rules} from "./pages/index";
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/question" element={<Questions/>}/>

      </Routes>
    </div>
  );
}

export default App;
