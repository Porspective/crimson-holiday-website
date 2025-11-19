const ChristmasLights = () => {
  const lightColors = [
    "bg-red-500",
    "bg-green-500", 
    "bg-yellow-400",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  // Create 20 lights across the navbar
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: lightColors[i % lightColors.length],
    delay: i * 0.15,
  }));

  return (
    <div className="absolute top-20 left-0 right-0 h-8 pointer-events-none overflow-visible z-20">
      {/* Wire */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-800/60" />
      
      {/* Lights */}
      <div className="flex justify-around items-start h-full px-4">
        {lights.map((light) => (
          <div key={light.id} className="flex flex-col items-center">
            {/* String */}
            <div className="w-0.5 h-2 bg-foreground/30" />
            
            {/* Bulb */}
            <div
              className={`w-3 h-4 rounded-full ${light.color} animate-twinkle shadow-lg`}
              style={{
                animationDelay: `${light.delay}s`,
                boxShadow: `0 0 10px currentColor`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
