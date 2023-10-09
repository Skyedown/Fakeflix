import {BrowserRouter, Routes, Route} from 'react-router-dom'

//styles
import './App.css';


//pages
import List from './pages/list/List'
import SingleMovie from './pages/movies/SingleMovie'
import Error from './pages/error/Error'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Search from './pages/search/Search';





//render
function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>

        <Route path='/list' element={<List/>}/>
        <Route path='/SingleMovie/:movieId' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>


    </Routes>
</BrowserRouter>
)
}

export default App;
