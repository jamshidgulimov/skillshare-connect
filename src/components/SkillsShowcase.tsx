import { Code, Palette, Globe, Music, Camera, TrendingUp, Cpu, BookOpen } from "lucide-react";

const skills = [
  { icon: Code, name: "Dasturlash", count: "2,340", color: "bg-primary" },
  { icon: Globe, name: "Tillar", count: "3,120", color: "bg-primary" },
  { icon: Palette, name: "Dizayn", count: "1,850", color: "bg-coin" },
  { icon: TrendingUp, name: "Marketing", count: "980", color: "bg-primary" },
  { icon: Music, name: "Musiqa", count: "760", color: "bg-coin" },
  { icon: Camera, name: "Fotografiya", count: "1,200", color: "bg-primary" },
  { icon: Cpu, name: "AI/ML", count: "640", color: "bg-coin" },
  { icon: BookOpen, name: "Matematika", count: "890", color: "bg-primary" },
];

const SkillsShowcase = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 text-foreground">
            Mashhur <span className="text-gradient-coin">ko'nikmalar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platformamizda eng ko'p almashadigan bilimlar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.color === 'bg-coin' ? 'bg-coin-gradient' : 'bg-hero-gradient'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.count} foydalanuvchi</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
