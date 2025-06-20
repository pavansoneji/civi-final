import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export default function ProductCard({ icon: Icon, title, description, href, gradient }: ProductCardProps) {
  return (
    <Link href={href}>
      <Card className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
        <CardContent className="p-0">
          <div className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gradient-to-r",
            gradient
          )}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            {description}
          </p>
          <div className="text-primary font-semibold hover:text-blue-700 transition-colors flex items-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
