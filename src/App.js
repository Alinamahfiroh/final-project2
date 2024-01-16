import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/pinjam' element={<Crud />} />
    </Routes>
   </Router>
  );
}

export default App;
