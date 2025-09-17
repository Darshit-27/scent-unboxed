import heroImage from "@/assets/perfume-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          Essence of 
          <span className="text-gradient block mt-2">Elegance</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of luxury fragrances crafted to capture 
          your most precious moments and memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="btn-luxury text-lg">
            Explore Collection
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 rounded-lg">
            Our Story
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;