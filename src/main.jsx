import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import CurrencyApp from './components/Currency/CurrencyApp.jsx'
import ContextTest from './components/ContextTest/ContextTest.jsx'
import ThemeChanger from './components/ThemeChanger/ThemeChanger.jsx'
import TodoApp from './components/TodoApp/TodoApp.jsx'
import PriceList from './components/pricelist/PriceList.jsx'
import { ThemeProvider } from './Context/ThemeContext.js'
import ThemeContextProvider from './Context/ThemeContextProvider.jsx'
import Todoapp from './components/todo-zustand/Todoapp.jsx'
import CourseApp from './components/course-todo/CourseApp.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>        
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="currencyapp" element={<CurrencyApp />} />
      <Route path="contest" element={<ContextTest />} />
      <Route path="themechanger" element={<ThemeChanger />} />
      <Route path="todo" element={<TodoApp />} />
      <Route path="app" element={<App />} />
      <Route path="priceavg" element={<PriceList />} />
      <Route path="todozustand" element={<Todoapp />} />
      <Route path="coursezustand" element={<CourseApp />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider >
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
