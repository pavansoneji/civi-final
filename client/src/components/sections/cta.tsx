import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 primary-gradient">
      <motion.div 
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-6 text-xl text-blue-100">
          Join the AI revolution and see how Civi can help you achieve unprecedented efficiency and growth.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
            <Link href="/contact">Get Your Free Demo</Link>
          </Button>
          {/* <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-black hover:bg-white hover:text-primary">
            <Link href="#products">Explore All Solutions</Link>
          </Button> */}
        </div>
      </motion.div>
    </section>
  );
}
