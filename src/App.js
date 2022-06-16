import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SharedLayout from './components/SharedLayout'
import Landing from './pages/Landing';
import Cart from './pages/Cart'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SharedLayout />
            } >
        <Route path='landing' element={<Landing />} />
        <Route path='cart' element={<Cart/>} />
        
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
