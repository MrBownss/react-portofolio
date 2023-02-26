import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Biografi from './pages/Biografi';
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/biografi' element={<Biografi/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
      </Routes>
    </Router>
  )
}

export default App;
