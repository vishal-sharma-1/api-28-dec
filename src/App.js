import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App container pt-4">
      <Router>
      <ul className='list-group list-group-horizontal'>
      <li className='list-group-item'>
          <Link to={"/home"} className='nav-link'>Home</Link>
        </li>
        <li className='list-group-item'>
          <Link to={"/users"} className='nav-link'>Users</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route exact path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;