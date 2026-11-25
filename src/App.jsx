import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
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
import Account from './pages/Account'
import AuthProvider from './auth/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/tai-khoan" element={<Account />} />
          <Route
            path="*"
            element={(
              <main className="container py-5 text-center" aria-labelledby="not-found-title">
                <p className="text-uppercase text-secondary fw-semibold">404</p>
                <h1 id="not-found-title">Không tìm thấy trang</h1>
                <p>Đường dẫn này không tồn tại hoặc đã được thay đổi.</p>
                <Link className="btn btn-primary" to="/">Về trang chủ</Link>
              </main>
            )}
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
