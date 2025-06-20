import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-bold">Civi</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Revolutionizing business operations through AI-driven solutions. Transform your client management, case handling, and learning systems with cutting-edge artificial intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/client-management" className="text-gray-300 hover:text-white transition-colors">
                  AI Client Management
                </Link>
              </li>
              <li>
                <Link href="/products/case-management" className="text-gray-300 hover:text-white transition-colors">
                  AI Case Management
                </Link>
              </li>
              {/* <li>
                <Link href="/products/learning-management" className="text-gray-300 hover:text-white transition-colors">
                  AI Learning Management
                </Link>
              </li> */}
              <li>
                <Link href="/products/ai-agents" className="text-gray-300 hover:text-white transition-colors">
                  Custom AI Agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2024 Civi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
