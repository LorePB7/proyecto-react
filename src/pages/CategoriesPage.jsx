import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import pizzaImg from '../assets/placeholder-margherita.jpg';
import burgerImg from '../assets/placeholder-burger-meal.jpg';
import saladImg from '../assets/placeholder-chicken-salad.jpg';
import sushiImg from '../assets/placeholder-salmon-sushi.jpg';
import dessertImg from '../assets/placeholder-dessert.jpg';
import drinkImg from '../assets/placeholder-drink.jpg';
import Button from '../components/Button';

function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Sample products for each category with more items
  const categoryProducts = {
    "Pizza": [
      {
        id: 1,
        name: "Pizza Margherita",
        description: "Pizza clásica con salsa de tomate, mozzarella y albahaca",
        price: 12.99,
        rating: 4.8,
        image: pizzaImg,
      },
      {
        id: 2,
        name: "Pizza Pepperoni",
        description: "Pizza con pepperoni, queso mozzarella y salsa de tomate",
        price: 13.99,
        rating: 4.7,
        image: pizzaImg,
      },
      {
        id: 3,
        name: "Pizza Hawaiana",
        description: "Pizza con jamón, piña, queso mozzarella y salsa de tomate",
        price: 14.99,
        rating: 4.5,
        image: pizzaImg,
      },
      {
        id: 4,
        name: "Pizza Vegetariana",
        description: "Pizza con pimientos, cebolla, champiñones, aceitunas y queso",
        price: 13.49,
        rating: 4.6,
        image: pizzaImg,
      },
    ],
    "Hamburguesas": [
      {
        id: 1,
        name: "Hamburguesa Clásica",
        description: "Hamburguesa con carne de res, lechuga, tomate y queso cheddar",
        price: 9.99,
        rating: 4.6,
        image: burgerImg,
      },
      {
        id: 2,
        name: "Hamburguesa BBQ",
        description: "Hamburguesa con salsa barbacoa, cebolla caramelizada y queso",
        price: 11.99,
        rating: 4.7,
        image: burgerImg,
      },
      {
        id: 3,
        name: "Hamburguesa Doble",
        description: "Hamburguesa con doble carne, doble queso, tocino y salsa especial",
        price: 13.99,
        rating: 4.8,
        image: burgerImg,
      },
      {
        id: 4,
        name: "Hamburguesa Vegetariana",
        description: "Hamburguesa de garbanzos con lechuga, tomate y salsa de yogur",
        price: 10.99,
        rating: 4.5,
        image: burgerImg,
      },
    ],
    "Ensaladas": [
      {
        id: 1,
        name: "Ensalada César",
        description: "Lechuga romana, crutones, queso parmesano y aderezo césar",
        price: 8.99,
        rating: 4.5,
        image: saladImg,
      },
      {
        id: 2,
        name: "Ensalada Mediterránea",
        description: "Tomate, pepino, aceitunas, queso feta y aderezo de limón",
        price: 9.99,
        rating: 4.6,
        image: saladImg,
      },
      {
        id: 3,
        name: "Ensalada de Quinoa",
        description: "Quinoa, aguacate, tomate cherry, espinacas y aderezo de mostaza",
        price: 10.99,
        rating: 4.7,
        image: saladImg,
      },
      {
        id: 4,
        name: "Ensalada de Pollo",
        description: "Pollo a la parrilla, lechuga, tomate, maíz y aderezo ranch",
        price: 11.99,
        rating: 4.8,
        image: saladImg,
      },
    ],
    "Sushi": [
      {
        id: 1,
        name: "Roll California",
        description: "Roll de sushi con cangrejo, aguacate y pepino",
        price: 12.99,
        rating: 4.7,
        image: sushiImg,
      },
      {
        id: 2,
        name: "Roll Filadelfia",
        description: "Roll de sushi con salmón, queso crema y aguacate",
        price: 13.99,
        rating: 4.8,
        image: sushiImg,
      },
      {
        id: 3,
        name: "Nigiri de Salmón",
        description: "Arroz de sushi cubierto con láminas de salmón fresco",
        price: 14.99,
        rating: 4.9,
        image: sushiImg,
      },
      {
        id: 4,
        name: "Sashimi Mixto",
        description: "Selección de pescado crudo cortado finamente: salmón, atún y pez blanco",
        price: 16.99,
        rating: 4.9,
        image: sushiImg,
      },
    ],
    "Postres": [
      {
        id: 1,
        name: "Tiramisú",
        description: "Postre italiano con capas de bizcocho, café y crema de mascarpone",
        price: 6.99,
        rating: 4.8,
        image: dessertImg,
      },
      {
        id: 2,
        name: "Cheesecake",
        description: "Tarta de queso cremosa con base de galleta y cobertura de frutos rojos",
        price: 7.99,
        rating: 4.7,
        image: dessertImg,
      },
      {
        id: 3,
        name: "Brownie con Helado",
        description: "Brownie de chocolate caliente con helado de vainilla",
        price: 5.99,
        rating: 4.9,
        image: dessertImg,
      },
      {
        id: 4,
        name: "Flan de Caramelo",
        description: "Flan casero con salsa de caramelo",
        price: 4.99,
        rating: 4.6,
        image: dessertImg,
      },
    ],
    "Bebidas": [
      {
        id: 1,
        name: "Limonada Casera",
        description: "Limonada fresca con menta y hielo",
        price: 3.99,
        rating: 4.7,
        image: drinkImg,
      },
      {
        id: 2,
        name: "Smoothie de Frutas",
        description: "Batido de frutas mixtas con yogur y miel",
        price: 4.99,
        rating: 4.8,
        image: drinkImg,
      },
      {
        id: 3,
        name: "Café Helado",
        description: "Café espresso con hielo, leche y sirope de vainilla",
        price: 4.49,
        rating: 4.6,
        image: drinkImg,
      },
      {
        id: 4,
        name: "Agua Mineral",
        description: "Agua mineral natural con o sin gas",
        price: 1.99,
        rating: 4.5,
        image: drinkImg,
      },
    ],
  };

  // Get all categories
  const allCategories = Object.keys(categoryProducts);

  // Filter products based on selected category
  const getFilteredProducts = () => {
    if (selectedCategory === 'Todos') {
      // Return all products grouped by category
      return allCategories.map(category => ({
        category,
        products: categoryProducts[category]
      }));
    } else {
      // Return only products from the selected category
      return [{
        category: selectedCategory,
        products: categoryProducts[selectedCategory]
      }];
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Use CategorySection instead of CategoryFilter */}
        <CategorySection 
          onCategorySelect={setSelectedCategory} 
          selectedCategory={selectedCategory} 
          showAllLink={false}
        />
        
        {/* Display products for filtered categories */}
        {filteredProducts.map(({ category, products }) => (
          <section key={category} className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{category}</h2>
              <Button color="orange" style={{padding: '4px 12px', fontSize: '14px'}}>
                Ver Todos
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{product.name}</h3>
                      <div className="flex items-center bg-red-100 px-2 py-1 rounded text-xs text-red-700">
                        <span>★</span>
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                      <Button color="red" style={{padding: '6px 16px', fontSize: '14px'}}>
                        Añadir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default CategoriesPage;