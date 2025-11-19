const ChristmasLights = () => {
  const lights = [
    { color: "#ff0000", glow: "rgba(255, 0, 0, 0.8)" },      // Red
    { color: "#00ff00", glow: "rgba(0, 255, 0, 0.8)" },      // Green
    { color: "#ffff00", glow: "rgba(255, 255, 0, 0.8)" },    // Yellow
    { color: "#0000ff", glow: "rgba(0, 0, 255, 0.8)" },      // Blue
    { color: "#ff00ff", glow: "rgba(255, 0, 255, 0.8)" },    // Magenta
    { color: "#ff8800", glow: "rgba(255, 136, 0, 0.8)" },    // Orange
  ];

  // Create 25 lights across the screen
  const lightBulbs = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    ...lights[i % lights.length],
    delay: i * 0.2,
  }));

  return (
    <div className="absolute top-20 left-0 right-0 h-16 pointer-events-none overflow-visible z-20">
      {/* Wire */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900/80" 
           style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
      
      {/* Lights */}
      <div className="flex justify-around items-start h-full px-4">
        {lightBulbs.map((bulb) => (
          <div key={bulb.id} className="flex flex-col items-center relative">
            {/* Socket/Base */}
            <div className="w-2 h-3 bg-gray-800 rounded-t-sm relative z-10" 
                 style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.5)' }} />
            
            {/* Bulb */}
            <div
              className="w-5 h-8 animate-twinkle relative"
              style={{
                backgroundColor: bulb.color,
                animationDelay: `${bulb.delay}s`,
                boxShadow: `
                  0 0 20px ${bulb.glow},
                  0 0 40px ${bulb.glow},
                  inset 0 -2px 4px rgba(0,0,0,0.3),
                  inset 2px 0 4px rgba(255,255,255,0.3)
                `,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                clipPath: 'ellipse(50% 45% at 50% 40%)',
              }}
            >
              {/* Highlight */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full blur-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
