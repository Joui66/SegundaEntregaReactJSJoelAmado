import React from 'react'
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    
    <Navbar/>

    <Routes>
      <Route exact path='/' element={ItemListContainer}/>
      <Route exact path='/category/:id' element={ItemListContainer}/>
      <Route exact path='/item/:id' element={ItemDetailContainer}/>


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
