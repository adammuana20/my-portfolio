import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Spinner from './components/spinner/Spinner.component'
const Home = lazy(() => import('./pages/Home.component'))
const NotFound = lazy(() => import('./pages/not-found/404'))

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App