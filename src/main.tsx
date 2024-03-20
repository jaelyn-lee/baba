import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Error from './components/Error.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import CoffeeDetail from './components/CoffeeDetail.tsx'
import ShoppingCart from './components/ShoppingCart.tsx'
import Main from './pages/Main.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Main />} />
      <Route path="coffee" element={<Main />} />
      <Route path="coffee/:id" element={<CoffeeDetail />} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
    </Route>
  )
)

// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyA6Aa5RDRzFTwSZsFOvSljmB--Nb59y0zM',
//   authDomain: 'baba-shoppy.firebaseapp.com',
//   databaseURL: 'https://baba-shoppy-default-rtdb.firebaseio.com',
//   projectId: 'baba-shoppy',
//   storageBucket: 'baba-shoppy.appspot.com',
//   messagingSenderId: '242487554137',
//   appId: '1:242487554137:web:6ca444f16ade68ab4b4148',
//   measurementId: 'G-BR43HM8QNH',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const auth = getAuth(firebaseConfig)
// const db = getFirestore(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
