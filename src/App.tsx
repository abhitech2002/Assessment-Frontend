import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Welcome from './pages/Welcome';
import Register from './pages/Register';

function App(): JSX.Element {
  return (
<>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route path="/user/category" element={<Dashboard />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            {/* <Route path="/user/follow" element={<FollowsPage />} /> Update this line */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
