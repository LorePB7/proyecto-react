import pipshasImg from '../assets/placeholder-pizza.jpg'
import burgerkingImg from '../assets/placeholder-burger.jpg'
import sushixImg from '../assets/placeholder-sushi.jpg'
import saladImg from '../assets/placeholder-salad.jpg'
import dessertImg from '../assets/placeholder-dessert.jpg'
import drinkImg from '../assets/placeholder-drink.jpg'
import Button from './Button'

function CategorySection() {
    const categories = [
      { id: 1, name: "Pizza", image: pipshasImg },
      { id: 2, name: "Hamburguesas", image: burgerkingImg },
      { id: 3, name: "Sushi", image: sushixImg },
      { id: 4, name: "Ensaladas", image: saladImg },
      { id: 5, name: "Postres", image: dessertImg },
      { id: 6, name: "Bebidas", image: drinkImg },
    ]
  
    return (
      <section className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Categorías</h2>
          <Button color="green">Ver Todas</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
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
  
  