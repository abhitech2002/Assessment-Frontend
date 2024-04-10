import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Category from './pages/Category';
import Friends from './pages/Friends'

function App(): JSX.Element {
  return (
<>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/user/category" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/follow" element={<Friends />} /> 
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
