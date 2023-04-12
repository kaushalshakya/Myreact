import './App.css';
import Navbar from './Components/Navbar/navbar.js'; 
import Home from './Pages/Home/index.js';
import Forms from './Components/Forms/forms.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
     <Navbar />
     <Routes>
      <Route exact path='/' element={<Forms/>} />
      <Route exact path='/users' element={<Home/>} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
