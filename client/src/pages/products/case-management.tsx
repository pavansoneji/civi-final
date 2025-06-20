import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Route, FileText, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Intelligent Case Routing",
    description: "Automatically assign cases to the best-suited team members based on expertise and workload.",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Extract key information from documents automatically with advanced AI processing.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Predict potential issues and prioritize cases based on risk factors.",
  },
];

const benefits = [
  "Reduce case processing time by 50%",
  "Improve accuracy with 95% automated document analysis",
  "Increase team productivity by 40%",
  "Enhance compliance with automated risk detection",
];

export default function CaseManagement() {
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
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">AI Case Management</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Revolutionize your case handling with intelligent routing, automated document analysis, and predictive risk assessment that ensures optimal outcomes.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Learn More</Link>
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Case management system interface with document analysis and workflow automation"
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
            <h2 className="text-3xl font-bold text-foreground">Intelligent Case Processing</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              From intake to resolution, AI enhances every step of your case management process
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-purple-600" />
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

      {/* Workflow Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground">AI-Powered Workflow</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how our intelligent system transforms case management from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Case Intake", description: "AI analyzes incoming cases and extracts key information" },
              { step: "2", title: "Smart Routing", description: "Automatically assigns cases to the most qualified team member" },
              { step: "3", title: "Document Processing", description: "AI reviews and categorizes all related documents" },
              { step: "4", title: "Risk Analysis", description: "Predictive algorithms assess potential risks and priorities" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Measurable Impact</h2>
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
                  <h3 className="text-2xl font-bold text-foreground mb-6">Use Case: Legal Firm</h3>
                  <p className="text-muted-foreground mb-6">
                    A mid-size law firm transformed their case management process, resulting in faster resolutions and improved client satisfaction.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Case Processing Time</span>
                      <span className="text-lg font-semibold text-green-600">-50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Document Analysis Accuracy</span>
                      <span className="text-lg font-semibold text-blue-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Team Productivity</span>
                      <span className="text-lg font-semibold text-purple-600">+40%</span>
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
            Streamline Your Case Management Today
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Discover how AI can transform your case handling process and deliver better outcomes.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Link href="/contact">Get Your Demo</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
