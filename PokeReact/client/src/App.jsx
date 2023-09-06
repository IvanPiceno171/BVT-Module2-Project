import './App.css'
import Home from './components/Home'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';


function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>


      <Route path="/" element={<Home/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>



    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
