

import './App.css';
import Form from './component/Form'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from './component/Navbar'
import Demo from './component/Demo'
import Drop from './component/Drop'
import Calendly from './page/calendly';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path='/' exact element={<Home />} /> */}
        <Route path='/calendly' element={<Calendly />} />
        {/* <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
