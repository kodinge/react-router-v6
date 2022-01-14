import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Post from './components/Post';
import Product from './components/Product';
import ProtectedRoute from './pages/private/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<ProtectedRoute><Detail /></ProtectedRoute>} >
          <Route path="post" element={<Post />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
