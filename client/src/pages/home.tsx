import Hero from "@/components/sections/hero";
import ProductsOverview from "@/components/sections/products-overview";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsOverview />
      <Benefits />
      <CTA />
    </div>
  );
}
