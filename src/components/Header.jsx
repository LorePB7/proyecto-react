"use client"

import { useState } from "react"
import Button from './Button'
import { Link } from 'react-router-dom'

function Header({ isLoginPage = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 w-full px-4 py-2">
        <div className="container mx-auto bg-white shadow-sm rounded-full px-6 py-3 flex items-center justify-between">
          {/* En móvil: menú a la izquierda, logo centrado, carrito a la derecha */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(true)}>
              <span className="text-sm">Menú</span>
              <span className="sr-only">Abrir menú</span>
            </button>
          </div>
          
          {/* Logo - centrado en móvil, a la izquierda en desktop */}
          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:ml-10">
            <a href="/" className="font-bold text-xl text-red-500">
              FoodApp
            </a>
          </div>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center justify-center gap-6 mx-auto">
            <a href="#" className="font-medium">
              Inicio
            </a>
            <a href="#" className="font-medium">
              Categorías
            </a>
            <a href="#" className="font-medium">
              Populares
            </a>
            <a href="#" className="font-medium">
              Nuevos
            </a>
          </div>

          {/* Búsqueda y carrito */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-full max-w-[200px]">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full py-2 pl-3 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <Link to="/login" className="hidden md:block">
              <Button color="orange" style={{padding: '2px 8px', fontSize: '0.875rem'}}>
                Ingresar
              </Button>
            </Link>
            <div className="relative cursor-pointer">
              <div className="flex items-center text-red-500 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="stroke-current">
                  <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                    <path d="M17 17H6V3H4"></path>
                    <path d="m6 5l14 1l-1 7H6"></path>
                  </g>
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search - Ocultar en la página de login */}
      {!isLoginPage && (
        <div className="md:hidden container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar comida..."
              className="w-full py-2 pl-3 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white h-full w-[250px] p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl text-red-500">FoodApp</span>
              <Button color="red" style={{padding: '4px 12px'}} onClick={() => setIsMenuOpen(false)}>
                Cerrar
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-lg font-medium">
                Inicio
              </a>
              <a href="#" className="text-lg font-medium">
                Categorías
              </a>
              <a href="#" className="text-lg font-medium">
                Populares
              </a>
              <a href="#" className="text-lg font-medium">
                Nuevos
              </a>
              <a href="#" className="text-lg font-medium">
                Mis Pedidos
              </a>
              <Link to="/login" className="text-lg font-medium text-orange-500">
                Iniciar Sesión
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

