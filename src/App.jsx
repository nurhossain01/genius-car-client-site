import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/router'

function App() {


  return (
    <div data-theme="cupcake" className='px-48 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
