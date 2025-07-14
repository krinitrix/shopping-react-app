import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import ViewAllProducts from './components/ViewAllProducts';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddProducts/>} />
        <Route path="view" element={<ViewAllProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
