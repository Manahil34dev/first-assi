/*
import 'bootstrap/dist/css/bootstrap.min.css';
import aliImg from './pic.png'
import mydemo from './demo.css'
import dev from './div.module.css'
function App() {
  const style ={
    color:'bule',
    backgroundColor:'yellow',
  }
  let a=7; let b=6 ; let Total = a+b;
  return (
    <div >
<h1>hi i am testing</h1>
 <img src={aliImg}  width="300" height="400"/>
 <h2 style={style}>logo</h2>
 <h1 className={dev.test}>react js </h1>
 <img src='./pic.png' />
 <button  className='btn btn-danger'>show me</button>
 <h1> Total {Total}</h1>
 </div>
  );
}
*/
// src/App.js
import React from 'react';
//import routes from 'routes';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contect';
import Footer from './footer';
import './home.css';




const App = () => {
  return (

    <Router>
      <div>
        <nav>
        <div className="logo">
          <link to="/"></link>
          <img src={'/logo.png'} alt="logo"/>
        </div>
          
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          
        </nav>
      
  


        <hr />
        
        <Routes>
        <Route   path="/" element ={<Home />} /> 
        <Route  path="/about" element ={< About/>} />
      
        <Route   path="/contact" element={< Contact />} />
        </Routes>
        <Footer/>
        
      </div> 
    </Router> 
    
  );
}
export default App;

