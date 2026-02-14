import { UserPlus, Search, ArrowLeftRight, Award } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Ro'yxatdan o'ting",
    description: "Bilganlaringiz va o'rganmoqchi bo'lgan ko'nikmalaringizni kiriting.",
    step: "01",
  },
  {
    icon: Search,
    title: "Sherik toping",
    description: "AI tizimi sizga eng mos o'qituvchi yoki o'quvchini topib beradi.",
    step: "02",
  },
  {
    icon: ArrowLeftRight,
    title: "Bilim almashing",
    description: "Jonli video-aloqa orqali dars o'tkazing va Skill-Coin yig'ing.",
    step: "03",
  },
  {
    icon: Award,
    title: "Sertifikat oling",
    description: "Ko'nikmangizni tasdiqlang va professional profilingizni kuchaytiring.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-foreground">
            Qanday <span className="text-gradient-primary">ishlaydi?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            4 oddiy qadamda bilim almashishni boshlang
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-6">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
