import { motion } from "framer-motion";
import { TrendingUp, Brain, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline workflows with AI-powered solutions that work 24/7.",
  },
  {
    icon: Brain,
    title: "Improved Decision-Making",
    description: "Leverage predictive analytics and intelligent insights to make data-driven decisions with confidence.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce operational costs while improving quality and consistency across all business processes.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 primary-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white">Why Choose Civi?</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the transformative power of AI across your entire business ecosystem
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
