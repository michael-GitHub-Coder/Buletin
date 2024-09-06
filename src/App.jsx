import { Navbar } from "./navbar"
import { Body } from "./body"
import EditorsPick from "./EditorsPick"
import Footer from './Footer'
import LatestArt from "./LatestNews"
import { Subscribe } from "./Subscribe"
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./MainLayout"
import HomePage from "./HomePage"

function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    )
  )
  return(<RouterProvider router={router} />)
  //   <>
  //   <Navbar></Navbar> 
  //   <Body></Body>
  //   <LatestArt />
  //   <EditorsPick />
  //   <Subscribe />
  //   <Footer />
  //   </>
  // )
}

export default App