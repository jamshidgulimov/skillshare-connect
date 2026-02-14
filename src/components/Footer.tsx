import { Coins } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center">
                <Coins className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Skill<span className="text-gradient-primary">Swap</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bilim almashish orqali dunyoni o'zgartiring.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Platforma</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Qanday ishlaydi</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ko'nikmalar</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Narxlar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Kompaniya</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Biz haqimizda</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Karera</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Qo'llab-quvvatlash</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Yordam markazi</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Maxfiylik siyosati</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Foydalanish shartlari</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 SkillSwap Connect. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
