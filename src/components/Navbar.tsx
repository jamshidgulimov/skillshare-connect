import { useState } from "react";
import { Menu, X, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center">
            <Coins className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Skill<span className="text-gradient-primary">Swap</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Qanday ishlaydi
          </a>
          <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ko'nikmalar
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Narxlar
          </a>
          <Button variant="outline" size="sm">Kirish</Button>
          <Button size="sm" className="bg-hero-gradient text-primary-foreground hover:opacity-90">
            Boshlash
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground py-2">Qanday ishlaydi</a>
          <a href="#skills" className="text-sm font-medium text-muted-foreground py-2">Ko'nikmalar</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground py-2">Narxlar</a>
          <Button variant="outline" size="sm" className="w-full">Kirish</Button>
          <Button size="sm" className="w-full bg-hero-gradient text-primary-foreground">Boshlash</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
