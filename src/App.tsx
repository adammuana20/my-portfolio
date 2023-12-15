import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Spinner from './components/spinner/Spinner.component'
const Home = lazy(() => import('./pages/Home.component'))

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App