import React from "react";

function Hero() {
  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
      <p className="text-xl mb-6">
        Hi, I'm Alpha Peter, a passionate software engineer with a love for
        creating impactful and efficient solutions. I enjoy building innovative
        software and bringing ideas to life through code. Explore my projects,
        skills, and experiences to see how I can help turn your vision into
        reality.
      </p>
      <a
        href="projects"
        className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
