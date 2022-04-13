import React from 'react'
import { Route, Routes } from 'react-router'
// import Header from './Component/Header/Header';
// import Footer from './Component/Footer/Footer';
// import Welcome from './Component/Welcome/Welcome';
// import Search from './Component/Search/Search';
import Layout from './Layout/Layout';
import Detail from './Pages/Detail'
import Result from './Pages/Result'
import SearchCar from './Pages/SearchCar'

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<SearchCar />} />
            <Route path="/result" element={<Result />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Layout>
    </>
  );
}

export default App;
