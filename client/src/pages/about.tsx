import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">About Civi</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're passionate about revolutionizing how businesses operate through the power of artificial intelligence. Our mission is to make advanced AI technology accessible and practical for organizations of all sizes.
              </p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To democratize AI technology and empower businesses to achieve unprecedented efficiency and growth through intelligent automation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">A world where AI enhances human potential, making businesses more productive, decisions more informed, and outcomes more successful.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Innovation through practical AI solutions</li>
                    <li>• Transparency in AI decision-making</li>
                    <li>• Commitment to customer success</li>
                    <li>• Ethical AI development and deployment</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional diverse business team collaborating in a modern office environment"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Founded with the vision of making artificial intelligence accessible to businesses of all sizes, 
                Civi emerged from the recognition that many organizations struggle to leverage AI effectively. 
                Our team of AI experts and business strategists came together to bridge this gap.
              </p>
              <p>
                We believe that AI should enhance human capabilities, not replace them. Our solutions are 
                designed to work alongside your team, providing intelligent insights and automation that 
                amplify productivity while maintaining the human touch that's essential to great business relationships.
              </p>
              <p>
                Today, we're proud to serve organizations across healthcare, finance, education, and retail, 
                helping them transform their operations and achieve remarkable results through the strategic 
                application of AI technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground">Our Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team brings together decades of experience in AI research, software development, 
              and business strategy to deliver solutions that truly make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI Research</h3>
              <p className="text-muted-foreground">
                Cutting-edge research in machine learning, natural language processing, and predictive analytics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Strategy</h3>
              <p className="text-muted-foreground">
                Deep understanding of business processes and how AI can be strategically implemented for maximum impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Implementation</h3>
              <p className="text-muted-foreground">
                Proven track record of delivering scalable, enterprise-ready AI solutions that integrate seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
