import ProductCard from "./ProductCard";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Midnight Mystic",
      description: "An enchanting blend of dark berries, vanilla, and mysterious florals that captivates the senses.",
      price: "$89",
      image: perfume1,
      isNew: true,
    },
    {
      id: "2", 
      name: "Golden Dawn",
      description: "A warm, luxurious fragrance with notes of amber, sandalwood, and delicate citrus.",
      price: "$125",
      image: perfume2,
    },
    {
      id: "3",
      name: "Crystal Breeze",
      description: "Fresh and sophisticated with marine accords, white tea, and subtle musk undertones.",
      price: "$95",
      image: perfume3,
    },
  ];

  return (
    <section className="py-20 px-6 bg-luxury-light/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved fragrances, carefully crafted to embody 
            sophistication and timeless elegance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;