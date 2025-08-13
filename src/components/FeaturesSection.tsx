
import { Pill, Search, MessageSquare } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Pill className="h-12 w-12 text-primary" />,
      title: "Comprehensive Medicine Database",
      description: "Access information on a wide range of prescription and over-the-counter medications."
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Advanced Search",
      description: "Find medications by name, category, or health condition with our powerful search tools."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Virtual Assistant",
      description: "Get answers to your medication questions through our AI-powered chat assistant."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how MediBot can help you better understand your medications and health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
