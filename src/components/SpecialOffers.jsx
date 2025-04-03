import deliveryImg from '../assets/placeholder-delivery.jpg'
import discountImg from '../assets/placeholder-discount.jpg'
import Button from './Button'

function SpecialOffers() {
    return (
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Ofertas Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-xl p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Entrega Gratis</h3>
              <p className="text-gray-600 mb-4">En tu primer pedido mayor a $15</p>
              <div className="flex justify-center md:justify-start">
                <Button color="red">
                  Ordenar Ahora
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={deliveryImg}
                alt="Entrega gratis"
                className="rounded-xl w-full max-w-[150px] h-auto"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">20% de Descuento</h3>
              <p className="text-gray-600 mb-4">En artículos seleccionados esta semana</p>
              <div className="flex justify-center md:justify-start">
                <Button color="red">
                  Ver Ofertas
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={discountImg}
                alt="Oferta de descuento"
                className="rounded-xl w-full max-w-[150px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SpecialOffers
  
  