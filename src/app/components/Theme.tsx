const AnimatedBackground = () => {
    const circles = [
      { size: "w-20 h-20", left: "left-[25%]", animation: "animate-circles-25" },
      { size: "w-5 h-5", left: "left-[10%]", animation: "animate-circles-12" },
      { size: "w-5 h-5", left: "left-[70%]", animation: "animate-circles-18" },
      { size: "w-15 h-15", left: "left-[40%]", animation: "animate-circles-22" },
      { size: "w-5 h-5", left: "left-[65%]", animation: "animate-circles-15" },
      { size: "w-28 h-28", left: "left-[75%]", animation: "animate-circles-30" },
      { size: "w-40 h-40", left: "left-[35%]", animation: "animate-circles-20" },
      { size: "w-7 h-7", left: "left-[50%]", animation: "animate-circles-45" },
      { size: "w-4 h-4", left: "left-[20%]", animation: "animate-circles-35" },
      { size: "w-40 h-40", left: "left-[85%]", animation: "animate-circles-11" },
    ];
  
    return (
      <div className="area w-full h-screen absolute bg-gradient-to-l from-[#867fe0] to-[#0303e7] -z-10">
        <ul className="circles relative w-full h-full overflow-hidden">
          {circles.map((circle, index) => (
            <li
              key={index}
              className={`circle absolute block list-none bg-white/20 bottom-[-150px] rounded-full ${circle.size} ${circle.left} ${circle.animation}`}
            ></li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AnimatedBackground;
  