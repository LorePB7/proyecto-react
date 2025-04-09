import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import PopularItems from './components/PopularItems'
import SpecialOffers from './components/SpecialOffers'
import CategorySection from './components/CategorySection'
import Button from './components/Button'
import heroImg from './assets/placeholder-hero.jpg'
import Footer from './components/Footer'
import LoginPage from './pages/loginpage'
import CategoriesPage from './pages/CategoriesPage'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 md:py-10">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Comida Deliciosa Entregada a Tu Puerta</h1>
            <p className="text-gray-600 mb-6">
              Ordena tus comidas favoritas con solo unos toques y disfruta de una entrega rápida.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button color="orange">Ordenar Ahora</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="Comida deliciosa"
              className="rounded-xl w-full max-w-[200px] h-auto object-cover" 
            />
          </div>
        </div>
      </section>
      
      <CategorySection />
      <PopularItems />
      <SpecialOffers />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App