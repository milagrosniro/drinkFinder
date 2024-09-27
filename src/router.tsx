import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout'
import FavoritesView from './views/FavoritesView'
import IndexView from './views/IndexView'

const App = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
            <Route path={'/'} element={<IndexView/>} index /> {/* ppal page*/}
            <Route path={'/favorites'} element={<FavoritesView/>} />
            </Route>

            
        </Routes>
        </BrowserRouter>
    
  )
}

export default App