import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Shield, CheckCircle, Stethoscope, CreditCard, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Custom AI agents that automate complex business processes with human-like decision making.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast analysis and response times for time-critical business operations.",
  },
  {
    icon: Shield,
    title: "Industry Compliance",
    description: "Built-in compliance features specific to your industry's regulations and standards.",
  },
];

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "AI agents for patient management, diagnostic assistance, and regulatory compliance.",
    features: ["Patient Triage", "Medical Records Analysis", "Appointment Scheduling", "Compliance Monitoring"]
  },
  {
    icon: CreditCard,
    title: "Finance",
    description: "Intelligent agents for fraud detection, risk assessment, and customer service.",
    features: ["Fraud Detection", "Risk Analysis", "Automated Trading", "Customer Support"]
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "AI-powered agents for inventory management, customer experience, and sales optimization.",
    features: ["Inventory Optimization", "Personalized Recommendations", "Price Management", "Customer Analytics"]
  },
];

const benefits = [
  "Reduce operational costs by up to 70%",
  "Increase processing speed by 10x",
  "Achieve 99.9% accuracy in repetitive tasks",
  "Scale operations without proportional staff increases",
];

export default function AIAgents() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Custom AI Agents</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Deploy industry-specific AI agents that automate complex tasks, provide intelligent customer support, and analyze data across healthcare, finance, and retail sectors.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get Custom Quote</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="AI robot and human collaboration in modern business environment"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground">AI Agent Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our custom AI agents are designed to seamlessly integrate into your existing workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl font-bold text-foreground">Industry-Specific Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored AI agents designed for the unique challenges of your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{industry.title}</h3>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground">Our Development Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to deployment, we ensure your AI agent perfectly fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Understand your business requirements and challenges" },
              { step: "2", title: "Design", description: "Create AI agent architecture tailored to your workflows" },
              { step: "3", title: "Development", description: "Build and train your custom AI agent" },
              { step: "4", title: "Testing", description: "Rigorous testing to ensure reliability and accuracy" },
              { step: "5", title: "Deployment", description: "Seamless integration into your existing systems" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Transformative Results</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Use Case: Social Audit Institute</h3>
                  <p className="text-muted-foreground mb-6">
                    Institutes focused on social audits can leverage AI-driven tools to enhance transparency, streamline reporting, and empower citizen engagement. By automating data collection and analysis, these tools enable faster insights and more impactful social accountability.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Data Verification Time</span>
                      <span className="text-lg font-semibold text-green-600">-60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Operational Overhead</span>
                      <span className="text-lg font-semibold text-blue-600">-40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Community Engagement</span>
                      <span className="text-lg font-semibold text-purple-600">+55%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            Ready to Deploy Your AI Agent?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Let's discuss how custom AI agents can transform your business operations and drive unprecedented efficiency.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Link href="/contact">Start Your AI Journey</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
