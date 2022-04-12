import React from 'react'
// import { Route, Routes } from 'react-router'

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Welcome from './Component/Welcome/Welcome';
import Search from './Component/Search/Search';

function App() {
  return (
    <>
        <Header/>
        <Welcome />
        <Search />
        <Footer/>
    </>
  );
}

export default App;
