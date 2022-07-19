import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Test from './pages/Test';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hola</h1>} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
