import { motion } from "framer-motion";
import ProductCard from "@/components/ui/product-card";
import { Users, Briefcase, GraduationCap, Bot } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "AI Client Management",
    description: "Predictive analytics for client retention, automated workflows, and intelligent insights that transform your client relationships. Increase retention by up to 35% while reducing manual tasks.",
    href: "/products/client-management",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Briefcase,
    title: "AI Case Management",
    description: "Intelligent case routing, automated document analysis, and predictive risk assessment for streamlined operations. Reduce processing time by 50% with 95% accuracy.",
    href: "/products/case-management",
    gradient: "from-purple-500 to-pink-400",
  },
  // {
  //   icon: GraduationCap,
  //   title: "AI Learning Management",
  //   description: "Personalized learning paths, AI-driven content recommendations, and automated progress tracking for optimal education outcomes. Improve learning results by 45%.",
  //   href: "/products/learning-management",
  //   gradient: "from-green-500 to-teal-400",
  // },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Industry-specific AI agents that automate tasks, provide intelligent support, and analyze data across healthcare, finance, and retail. Reduce operational costs by up to 70%.",
    href: "/products/ai-agents",
    gradient: "from-orange-500 to-red-400",
  },
];

const industries = [
  {
    title: "Healthcare",
    description: "Streamline patient management, enhance diagnostic accuracy, and ensure regulatory compliance with AI-powered solutions.",
    features: ["Patient Triage", "Medical Records Analysis", "Compliance Monitoring", "Diagnostic Assistance"]
  },
  {
    title: "Finance",
    description: "Enhance risk assessment, detect fraud in real-time, and provide intelligent customer service with advanced AI algorithms.",
    features: ["Fraud Detection", "Risk Analysis", "Automated Trading", "Customer Support"]
  },
  {
    title: "Education",
    description: "Transform learning experiences with personalized education paths and adaptive assessment systems.",
    features: ["Adaptive Learning", "Student Analytics", "Content Recommendations", "Progress Tracking"]
  },
  {
    title: "Retail",
    description: "Optimize inventory management, personalize customer experiences, and boost sales with intelligent AI systems.",
    features: ["Inventory Optimization", "Personalized Recommendations", "Price Management", "Customer Analytics"]
  },
];

export default function Solutions() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              AI Solutions for Every Business Need
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover how Civi's comprehensive suite of AI-powered tools can transform your operations, 
              enhance decision-making, and drive unprecedented growth across all aspects of your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Complete AI Solution Suite</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              From client management to custom AI agents, our solutions are designed to work together seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...solution} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Industry-Specific Applications</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Our AI solutions are tailored to meet the unique challenges of different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Why Choose Civi AI Solutions?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Results",
                description: "Our clients see measurable improvements within weeks of implementation",
                stats: "35% average increase in efficiency"
              },
              {
                title: "Seamless Integration",
                description: "Built to work with your existing systems and workflows",
                stats: "Deploy in under 30 days"
              },
              {
                title: "Continuous Learning",
                description: "AI that gets smarter and more effective over time",
                stats: "Ongoing performance optimization"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <p className="text-sm font-semibold text-primary">{benefit.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Let's discuss which AI solutions are right for your specific needs and goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}