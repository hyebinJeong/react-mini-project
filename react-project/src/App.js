import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
// 언제 어디서 쓸지 모르니까 App.js에 import하기
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies/:id' element={<MovieDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
