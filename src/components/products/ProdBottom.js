export default function StatsSection() {
    const stats = [
      { number: "60", label: "Team Members" },
      { number: "53", label: "Winning Awards" },
      { number: "3K", label: "Completed Projects" },
      { number: "2K", label: "Client Reviews" },
    ];
  
    return (
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            POWER YOUR{" "}
            <span className="text-[#77b81e]">WORLD</span>
          </h2>
  
          <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#E8F6D5] rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#77b81e] mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  