import {createBrowserRouter , 
  createRoutesFromElements,
  Route , 
  RouterProvider} from "react-router-dom"


//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Careers, { CareerLoaders } from "./pages/Careers"
import CareerDetails,{ CareerDetailsLoader } from "./pages/CareerDetails"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

// Components
import Layout from "./components/Layout"

// CSS
import "./style/Layout.css"
import "./style/Home.css"
import "./style/Contact.css"
import "./style/NotFound.css"
import "./style/About.css"
import "./style/Careers.css"
import "./style/CareerDetails.css"
import "./style/Footer.css"

// Code
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>

      <Route path="careers" element={<Careers />} loader={CareerLoaders} errorElement={<NotFound />}/>
      <Route path="careers/:id" element ={<CareerDetails />} loader={CareerDetailsLoader}/>

      <Route path="contact" element={<Contact/>}/>

      {/* Redirecting user when a page is not found */}
      <Route path="*" element={<NotFound />} />
    </Route>

  )
)

function App() {
  return <RouterProvider router={router}/>;
}

export default App

