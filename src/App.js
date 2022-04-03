import './App.css';
import {Routes,Route} from "react-router-dom";
import {Navbar} from "./components/index";
import {Home,Questions,Result,Rules} from "./pages/index";
function App() {
  return (
    <div className="App">
      <Navbar/>
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
