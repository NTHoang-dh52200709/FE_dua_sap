import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Coconut from './pages/Coconut'
import Land from './pages/Land'
import History from './pages/History'
import Science from './pages/Science'
import Farmers from './pages/Farmers'
import Cuisine from './pages/Cuisine'
import Products from './pages/Products'
import GeographicIndication from './pages/GeographicIndication'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dua-sap" element={<Coconut />} />
        <Route path="/vung-dat" element={<Land />} />
        <Route path="/100-nam" element={<History />} />
        <Route path="/khoa-hoc" element={<Science />} />
        <Route path="/nguoi-nong-dan" element={<Farmers />} />
        <Route path="/am-thuc" element={<Cuisine />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/chi-dan-dia-ly" element={<GeographicIndication />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
