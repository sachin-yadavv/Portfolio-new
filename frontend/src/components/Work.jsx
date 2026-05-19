export default function Work() {
  const work = [
    {
      name: "HTMF",
      image: "./assets/project1.png",
      description: "Full Stack Web Application",
      github: "https://github.com/sachin-yadavv",
      live: "https://htmf-eight.vercel.app/",
    },
    {
      name: "Chat App",
      image: "./assets/project2.png",
      description: "Real-time Chat Application",
      github: "https://github.com/sachin-yadavv",
      live: "https://chatapp-pi-tawny.vercel.app",
    },
  ];

  const count = work.length;

  const gridClass =
    count === 1
      ? "flex justify-center"
      : count === 2
      ? "flex flex-wrap justify-center gap-8"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

  const cardClass =
    count <= 2
      ? "w-full sm:w-[340px] md:w-[380px]"
      : "w-full";

  return (
    <div
      id="work"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-16 scroll-mt-20"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-sm sm:text-base leading-7">
        Here are some projects I've built using modern web technologies,
        focusing on clean UI, responsiveness, and real-world functionality.
      </p>

      <div className={gridClass}>
        {work.map((project) => (
          <div
            key={project.name}
            className={`
              ${cardClass}
              group
              rounded-2xl
              overflow-hidden
              bg-white/5
              border border-white/10
              hover:-translate-y-2
              duration-500
              hover:shadow-xl hover:shadow-fuchsia-500/10
            `}
          >
            <div className="overflow-hidden h-44">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

              <p className="text-sm text-gray-400 leading-6 mb-5">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black duration-300 text-sm"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white text-sm hover:scale-105 duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}