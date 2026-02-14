import { Check, Coins, Star, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Bepul",
    price: "0",
    description: "Bilim almashishni boshlang",
    icon: Coins,
    features: [
      "Oyiga 5 ta dars almashish",
      "Asosiy skill-matching",
      "Jamoaviy chat",
      "Profil yaratish",
    ],
    cta: "Bepul boshlash",
    popular: false,
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Professional o'sish uchun",
    icon: Star,
    features: [
      "Cheksiz dars almashish",
      "AI skill-matching",
      "Video mentorlik xonasi",
      "Sertifikat olish",
      "Ustuvor qo'llab-quvvatlash",
    ],
    cta: "Pro rejaga o'tish",
    popular: true,
  },
  {
    name: "Biznes",
    price: "49.99",
    description: "Kompaniyalar uchun",
    icon: Building2,
    features: [
      "Barcha Pro imkoniyatlar",
      "Talent Scout tizimi",
      "Korporativ dashboard",
      "API kirish huquqi",
      "Maxsus integratsiyalar",
      "Shaxsiy menejer",
    ],
    cta: "Bog'lanish",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-foreground">
            Oddiy <span className="text-gradient-primary">narxlar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Har bir daraja uchun mos reja
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-hero-gradient text-primary-foreground text-xs font-bold">
                  Mashhur
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl ${plan.popular ? 'bg-hero-gradient' : 'bg-secondary'} flex items-center justify-center mb-4`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground text-sm">/oy</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-hero-gradient text-primary-foreground hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
