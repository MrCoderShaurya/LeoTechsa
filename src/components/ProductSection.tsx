import { Link } from 'react-router-dom';

const products = [
  {
    title: "AGRICULTURE",
    description: "Food security is a global concern, governments worldwide are facing unprecedented rise in demand for food, Precision Agriculture with farm automation is the key.",
    image: "https://leotechsa.com/assets/img/Agri.png",
    link: "/agriculture",
  },
  {
    title: "TRANSPORT",
    description: "This technology began the trend of automation of repetitive material transportation task with precise motion solutions.",
    image: "https://leotechsa.com/assets/img/Transportation.png",
    link: "/transport",
  },
  {
    title: "DEFENSE",
    description: "Defense robots are professional service robots that are deployed by the military.",
    image: "https://leotechsa.com/assets/img/Defence.png",
    link: "/defence",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto">
        <h3 className="section-title">PRODUCT & SEGMENT</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="product-card relative group animation-fade-in overflow-hidden rounded-lg aspect-[4/5]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Subtle Gradient Overlay - Only at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content - Bottom aligned */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-xs text-gray-200 mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={product.link}
                  className="btn-primary text-center text-xs inline-block"
                >
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
