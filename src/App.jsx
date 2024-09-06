import { Navbar } from "./navbar"
import LatestNews from "./LatestNews"
import EditorsPick from "./EditorsPick"
import Footer from "./Footer"
import { Body } from "./body"
import { Subscribe } from "./Subscribe"
function App(){

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //       <Route path="/" element={<MainLayout />}>
  //           <Route index element={<HomePage />} />
  //       </Route>
  //   )
  //)
  // return(<RouterProvider router={router} />)
  return (
    <>
    <Navbar/> 
    <Body/>
    <section id="LatestNews">
      <LatestNews />
    </section>
    <section>
      <EditorsPick />
    </section>
    <section id="subscribe">
      <Subscribe />
    </section>
    <Footer />
    </>
  )
}

export default App