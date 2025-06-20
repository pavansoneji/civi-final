import { motion } from "framer-motion";
import ProductCard from "@/components/ui/product-card";
import { Users, Briefcase, GraduationCap, Bot } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "AI Client Management",
    description: "Predictive analytics for client retention, automated workflows, and intelligent insights that transform your client relationships.",
    href: "/products/client-management",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Briefcase,
    title: "AI Case Management",
    description: "Intelligent case routing, automated document analysis, and predictive risk assessment for streamlined operations.",
    href: "/products/case-management",
    gradient: "from-purple-500 to-pink-400",
  },
  // {
  //   icon: GraduationCap,
  //   title: "AI Learning Management",
  //   description: "Personalized learning paths, AI-driven content recommendations, and automated progress tracking for optimal education outcomes.",
  //   href: "/products/learning-management",
  //   gradient: "from-green-500 to-teal-400",
  // },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Industry-specific AI agents that automate tasks, provide intelligent support, and analyze data across healthcare, finance, and retail.",
    href: "/products/ai-agents",
    gradient: "from-orange-500 to-red-400",
  },
];

export default function ProductsOverview() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Our AI Solutions</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered tools can transform every aspect of your business operations
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
