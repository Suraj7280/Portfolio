import React from 'react'
import Sidebar from './components/navbar/sidebar';
import './App.css';
import Content from './components/navbar/content/Content';
import Academic from './components/academic/Academic';
import About from './components/about/About';
import Specialisedin from './components/specialisedin/Specialisedin';
import Contactus from './components/contact/contactus';


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = < Content />
      break;
    case "/academic":
      Component = <Academic />
      break;
    case "/about":
      Component = <About />
      break;
    case "/specialisedin":
      Component = <Specialisedin />
      break;
    case "/contactus":
      Component = <Contactus />
      break;
    default:
      break;
  }
  
  return (
    <>
      <Sidebar />
      <div className="component">
        {Component}
      </div>

    
    
    </>
  );
}

export default App;
