import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Test from './pages/Test';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hola</h1>} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
