import { ArrowRight, Coins, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-coin/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Coins className="w-4 h-4 text-coin" />
              <span>Bilim almashish platformasi</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
              O'rgating.{" "}
              <span className="text-gradient-primary">O'rganing.</span>{" "}
              <span className="text-gradient-coin">Coin yig'ing.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Birovga Ingliz tilini o'rgating — Skill-Coin oling. Boshqa birovdan 
              Dasturlash yoki Dizayn bo'yicha dars oling. Pul kerak emas, faqat bilim!
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-hero-gradient text-primary-foreground hover:opacity-90 gap-2 text-base px-8">
                Bepul boshlash <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-base px-8">
                Demo ko'rish
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">12,000+</p>
                  <p className="text-xs text-muted-foreground">Foydalanuvchilar</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-coin" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">50,000+</p>
                  <p className="text-xs text-muted-foreground">Almashuvlar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="SkillSwap illustration"
                className="w-full rounded-2xl"
              />
            </div>
            {/* Floating coin */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-coin-gradient flex items-center justify-center animate-float shadow-lg">
              <Coins className="w-8 h-8 text-coin-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
