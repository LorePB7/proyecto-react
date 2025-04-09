import pizzaImg from '../assets/placeholder-margherita.jpg'
import burgerImg from '../assets/placeholder-burger-meal.jpg'
import saladImg from '../assets/placeholder-chicken-salad.jpg'
import sushiImg from '../assets/placeholder-salmon-sushi.jpg'
import Button from './Button'

function PopularItems() {
    const popularItems = [
      {
        id: 1,
        name: "Pizza Margherita",
        description: "Pizza clásica con salsa de tomate, mozzarella y albahaca",
        price: 12.99,
        rating: 4.8,
        image: pizzaImg,
        discount: 10,
      },
      {
        id: 2,
        name: "Hamburguesa de Res",
        description: "Jugosa hamburguesa de res con queso, lechuga y salsa especial",
        price: 9.99,
        rating: 4.6,
        image: burgerImg,
      },
      {
        id: 3,
        name: "Ensalada de Pollo",
        description: "Vegetales frescos con pollo a la parrilla y aderezo balsámico",
        price: 8.99,
        rating: 4.5,
        image: saladImg,
      },
      {
        id: 4,
        name: "Sushi de Salmón",
        description: "Rollos de sushi de salmón fresco con aguacate y pepino",
        price: 14.99,
        rating: 4.9,
        image: sushiImg,
      },
    ]
  
    return (
      <section className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Platos Populares</h2>
          <Button color="orange" style={{padding: '4px 12px', fontSize: '14px'}}>
            Ver Todos
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.discount}% DESCUENTO
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex items-center bg-red-100 px-2 py-1 rounded text-xs text-red-700">
                    <span>★</span>
                    <span>{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                  <Button color="red" style={{padding: '6px 16px', fontSize: '14px'}}>
                    Añadir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default PopularItems
  
  