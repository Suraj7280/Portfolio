import Sidebar from './components/navbar/sidebar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Academic from './components/academic/Academic';



function App() {
  return (
    <>
    <Sidebar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='Academic' element={<Academic />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
