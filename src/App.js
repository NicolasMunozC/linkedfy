import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Test from './pages/Test';
import UserProfile from './pages/UserProfile/UserProfile';
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import PrivateRoute from './components/PrivateRoute';
import Account from './pages/Account/Account';
import Loader from './components/Loader/Loader';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect( () => {
    const unsubscribe = onAuthStateChanged( auth, (userCredential) => {
      if (userCredential) {
        dispatch(login({
          uid: userCredential.uid,
          email: userCredential.email
        }))
      } else {
        dispatch(logout())
      }
      
    })

    return unsubscribe
  },[dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hola</h1>} />
        <Route path='/account' element={<PrivateRoute user={user} children={<Account user={user}/>} />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login user={user} />} />
        <Route path='/loader' element={<Loader />} />
        <Route path='/:id' element={<UserProfile user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
