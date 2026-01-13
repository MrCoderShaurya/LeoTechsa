const products = [
  {
    title: "AGRICULTURE",
    description: "Food security is a global concern, governments worldwide are facing unprecedented rise in demand for food, Precision Agriculture with farm automation is the key.",
    image: "https://leotechsa.com/assets/img/Agri.png",
    link: "#",
  },
  {
    title: "TRANSPORT",
    description: "This technology began the trend of automation of repetitive material transportation task with precise motion solutions.",
    image: "https://leotechsa.com/assets/img/Transportation.png",
    link: "#",
  },
  {
    title: "DEFENSE",
    description: "Defense robots are professional service robots that are deployed by the military.",
    image: "https://leotechsa.com/assets/img/Defence.png",
    link: "#",
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
              className="product-card group animation-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="product-card-overlay">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-sm text-white/90 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="btn-primary text-center text-sm"
                >
                  FIND OUT MORE
                </a>
              </div>
              {/* Always visible title for non-hover states */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
