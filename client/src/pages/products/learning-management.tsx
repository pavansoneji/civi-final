import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Personalized Learning Paths",
    description: "AI creates custom learning journeys tailored to each individual's pace, style, and goals.",
  },
  {
    icon: Target,
    title: "AI-Driven Content Recommendations",
    description: "Intelligent algorithms suggest the most relevant content based on learning progress and objectives.",
  },
  {
    icon: TrendingUp,
    title: "Automated Progress Tracking",
    description: "Real-time analytics and insights help optimize learning outcomes and identify areas for improvement.",
  },
];

const benefits = [
  "Improve learning outcomes by 45%",
  "Reduce training time by 30%",
  "Increase engagement rates by 60%",
  "Achieve 90% course completion rates",
];

export default function LearningManagement() {
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
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">AI Learning Management</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Transform education and training with personalized learning paths, AI-driven content recommendations, and automated progress tracking for optimal learning outcomes.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Explore Features</Link>
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="AI-powered learning management system interface with personalized content"
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
            <h2 className="text-3xl font-bold text-foreground">Intelligent Learning Features</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Harness the power of AI to create personalized, engaging, and effective learning experiences
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
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-green-600" />
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

      {/* Learning Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground">Adaptive Learning Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI system continuously adapts to each learner's unique needs and preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Assessment", description: "AI evaluates current knowledge and learning style", icon: "📋" },
              { title: "Personalization", description: "Custom learning path created based on individual needs", icon: "🎯" },
              { title: "Adaptation", description: "Content and pace adjust based on real-time progress", icon: "🔄" },
              { title: "Optimization", description: "Continuous improvement of learning outcomes", icon: "📈" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Proven Learning Results</h2>
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
                  <h3 className="text-2xl font-bold text-foreground mb-6">Use Case: Corporate Training</h3>
                  <p className="text-muted-foreground mb-6">
                    A Fortune 500 company implemented our AI Learning Management System for employee development, achieving remarkable improvements in training effectiveness.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Learning Outcomes</span>
                      <span className="text-lg font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Training Time Reduction</span>
                      <span className="text-lg font-semibold text-blue-600">-30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Course Completion Rate</span>
                      <span className="text-lg font-semibold text-purple-600">90%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-foreground">Perfect for Every Sector</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI learning solutions adapt to the unique needs of different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description: "Enhance student outcomes with personalized learning paths and adaptive assessments.",
                features: ["K-12 & Higher Education", "Adaptive Testing", "Student Analytics"]
              },
              {
                title: "Corporate Training",
                description: "Accelerate employee development with AI-powered professional training programs.",
                features: ["Skills Development", "Compliance Training", "Leadership Programs"]
              },
              {
                title: "Healthcare",
                description: "Improve medical education and continuing education with specialized AI content.",
                features: ["Medical Training", "Certification Programs", "CME Credits"]
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{industry.title}</h3>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
            Revolutionize Learning with AI
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Experience the future of education and training with our intelligent learning management system.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Link href="/contact">Start Your Learning Revolution</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
