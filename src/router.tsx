import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritesView from './views/FavoritesView'
import IndexView from './views/IndexView'

const App = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<IndexView/>} />
            <Route path={'/favorites'} element={<FavoritesView/>} />

            
        </Routes>
        </BrowserRouter>
    
  )
}

export default App