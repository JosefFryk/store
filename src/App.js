import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SharedLayout from './components/SharedLayout'

import { SingleProduct , Cart, Landing, ProductsPage, Auth, About, Error, Checkout, AuthRoute } from './pages';



function App() {
  return (
    <Auth>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SharedLayout />
         
        } >
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route  exact path='/products/:id' element={<SingleProduct/>} />
        <Route exact path='/products' element={<ProductsPage />}/>
        <Route exact path='/about' element={<About />}/>
        <Route path='*' element= {<Error />}/>
        <Route exact path='/' element={<AuthRoute/>} >
            <Route exact path='/checkout' element={<Checkout />} />
        </Route>
       
        
        
        </Route>
      </Routes>
    
    </BrowserRouter>
    </Auth>
  );
}

export default App;
