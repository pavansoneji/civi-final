import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const productLinks = [
  {
    title: "AI Client Management",
    href: "/products/client-management",
    description: "Predictive analytics and automated workflows for client relationships",
  },
  {
    title: "AI Case Management",
    href: "/products/case-management",
    description: "Intelligent case routing and automated document analysis",
  },
  // {
  //   title: "AI Learning Management",
  //   href: "/products/learning-management",
  //   description: "Personalized learning paths and AI-driven content recommendations",
  // },
  {
    title: "Custom AI Agents",
    href: "/products/ai-agents",
    description: "Industry-specific AI agents for healthcare, finance, and retail",
  },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center text-[#3c83f6e6]">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="ml-2 text-xl font-bold" style={{ color: '#3c83f6e6' }}>Civi</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productLinks.map((product) => (
                        <li key={product.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {product.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {product.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/about" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location === "/contact" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-foreground">Products</div>
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block pl-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    href="/about"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <Button asChild className="mt-4">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
