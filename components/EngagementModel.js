import Button from './Button';

const models = [
  {
    icon: "⚖️",
    title: "Dedicated Hiring",
    description: "Hire dedicated developers and teams who work exclusively on your projects. Get full control over the development process with flexible engagement models.",
    buttonText: "Get a Free Quote",
  },
  {
    icon: "💰",
    title: "Fixed Cost",
    description: "Fixed-price projects with clearly defined scope and deliverables. Perfect for projects with well-defined requirements and timelines.",
    buttonText: "Get a Quote",
  },
];

export default function EngagementModel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose the Best Suitable Engagement Model
          </h2>
          <p className="text-xl text-gray-600">
            Based on your business objectives, budget and project requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "#6B1C95" }}
            >
              <div className="text-6xl mb-6">{model.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {model.title}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                {model.description}
              </p>
              <Button variant="secondary" className="w-full hover:border-white">
                {model.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

