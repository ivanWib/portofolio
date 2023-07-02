import { useEffect, useRef } from "react";


function Bintang() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    const circles = svgElement.querySelectorAll("circle");
    circles.forEach((circle) => {
      const randomCx = Math.random() * 100 + "%";
      const randomCy = Math.random() * 100 + "%";
      circle.setAttribute("cx", randomCx);
      circle.setAttribute("cy", randomCy);
    });
  }, []);
  

  const circles = [];
  let random = Math.random();
  for (let i = 0; i < 300; i++) {
    const randomCx = Math.random() * random + "%";
    const randomCy = Math.random() * random + "%";
    const colors = ['#000080', '#4B0082', '#006400', '#333333'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    circles.push(
      <circle
        cx={randomCx}
        cy={randomCy}
        r="1.1"
        fill={colors[randomIndex]}
        className="text-white"
      />
    );
  }

  return (
    <div class="w-screen h-screen bg-black">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0 z-0"
      >
        <rect width="100%" height="100%" fill="black" />
        {/* <rect className="w-screen h-screen" fill="black" /> */}


        {circles}
      </svg>
    </div>
  );
}

export default Bintang;
