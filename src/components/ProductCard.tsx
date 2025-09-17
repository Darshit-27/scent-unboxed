import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ name, description, price, image, isNew }: ProductCardProps) => {
  return (
    <Card className="card-luxury group cursor-pointer overflow-hidden border-0">
      <div className="relative overflow-hidden rounded-lg mb-4">
        {isNew && (
          <div className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gradient">{price}</span>
          <Button className="btn-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;