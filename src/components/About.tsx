const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-primary leading-tight">
              Crafting Memories 
              <span className="text-gradient block">Through Scent</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, we've been dedicated to creating exceptional fragrances 
              that tell stories and evoke emotions. Each bottle represents our commitment 
              to artistry, quality, and the power of scent to transform moments into memories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our master perfumers source the finest ingredients from around the world, 
              blending tradition with innovation to create fragrances that are both 
              timeless and contemporary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-luxury">Our Process</button>
              <button className="btn-secondary">Meet the Team</button>
            </div>
          </div>
          
          <div className="relative">
            <div className="luxury-gradient rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-white/80">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Unique Fragrances</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15</div>
                  <div className="text-white/80">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;