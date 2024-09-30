import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner'
import './index.css'
import Layout from './layout'

const FavoritesView = lazy(()=> import('./views/FavoritesView'))
const IndexView = lazy(()=> import('./views/IndexView'))


const App = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
            <Route path={'/'} element={
              <Suspense fallback={<Spinner/>}>
              <IndexView/>
            </Suspense>
              } index /> {/* ppal page*/}
            <Route path={'/favorites'} element={
              <Suspense fallback={<Spinner/>}>

                <FavoritesView/>
              </Suspense>
              } />
            </Route>

            
        </Routes>
        </BrowserRouter>
    
  )
}

export default App