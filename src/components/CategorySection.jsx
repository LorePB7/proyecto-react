import { Link } from 'react-router-dom'
import pipshasImg from '../assets/placeholder-pizza.jpg'
import burgerkingImg from '../assets/placeholder-burger.jpg'
import sushixImg from '../assets/placeholder-sushi.jpg'
import saladImg from '../assets/placeholder-salad.jpg'
import dessertImg from '../assets/placeholder-dessert.jpg'
import drinkImg from '../assets/placeholder-drink.jpg'
import Button from './Button'

function CategorySection({ onCategorySelect, selectedCategory, showAllLink = true }) {
  const categories = [
    { id: 1, name: "Pizza", image: pipshasImg },
    { id: 2, name: "Hamburguesas", image: burgerkingImg },
    { id: 3, name: "Sushi", image: sushixImg },
    { id: 4, name: "Ensaladas", image: saladImg },
    { id: 5, name: "Postres", image: dessertImg },
    { id: 6, name: "Bebidas", image: drinkImg },
  ]

  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Categorías</h2>
        {showAllLink && (
          <Link to="/categories">
            <Button color="orange" style={{padding: '4px 12px', fontSize: '14px'}}>Ver Todas</Button>
          </Link>
        )}
      </div>
      <div className="flex overflow-x-auto px-1 py-1 space-x-4">
        {selectedCategory !== undefined && (
          <div
            onClick={() => handleCategoryClick('Todos')}
            className={`flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center cursor-pointer ${selectedCategory === 'Todos' ? 'ring-2 ring-orange-500' : ''}`}
            style={{width: '140px', flex: '0 0 140px'}}
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <span className="text-2xl">🍽️</span>
            </div>
            <span className="font-medium text-center">Todos</span>
          </div>
        )}
        
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex-shrink-0 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center cursor-pointer ${selectedCategory === category.name ? 'ring-2 ring-orange-500' : ''}`}
            style={{width: '140px', flex: '0 0 140px'}}
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
  
  