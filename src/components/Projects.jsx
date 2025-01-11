const projects = [
  {
    title: "ABC Car Sales Portal",
    description: "A comprehensive used car marketplace built with Laravel and React. Features a bidding system, user authentication, car listings with image uploads, and an admin dashboard for managing users and listings.",
    tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
    links: {
      github: "https://github.com/Aungkyaw0/abc-car-sales.git",
      live: "#"
    },
    image: "/projects/abc-car-sales.jpg",
    features: [
      "User & Admin Authentication",
      "Car Listing Management",
      "Bidding System",
      "Image Upload & Management",
      "Advanced Search Functionality",
      "Responsive Dashboard"
    ]
  },
  {
    title: "In A Box - Meal Kit Delivery",
    description: "A modern web platform for meal kit delivery services offering recipe guides, meal planning, and bake-at-home sets. Features a clean, user-friendly interface optimized for both desktop and mobile devices.",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    links: {
      github: "https://github.com/Aungkyaw0/Aungkyaw0.github.io.git",
      live: "https://aungkyaw0.github.io"
    },
    image: "/projects/inabox.jpg",
    features: [
      "Recipe Guides & Instructions",
      "Meal Planning System",
      "Bake-at-Home Sets",
      "Customizable Meal Packages",
      "Nutritional Information App",
      "Responsive Mobile-First Design"
    ]
  },
  {
    title: "Meals On Wheels",
    description: "A charitable organization web platform dedicated to providing meal services to vulnerable adults. Features include user registration, meal planning, dietary management, food service management, and volunteer delivery coordination.",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    links: {
      github: "https://github.com/Aungkyaw0/Meals-On-Wheels.git",
      live: "#"
    },
    image: "/projects/meals-on-wheels.jpg",
    features: [
      "User Authentication & Authorization",
      "Member Dietary Management",
      "Caregiver Menu Planning",
      "Partner Food Service Management",
      "Volunteer Delivery System"
    ]
  },
  {
    title: "DoBu Martial Arts Academy",
    description: "A modern, responsive website for a martial arts academy offering various combat sports and fitness programs. Features a clean UI with interactive elements and comprehensive program information.",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    links: {
      github: "https://github.com/Aungkyaw0/DoBu-Martial-Arts.git",
      live: "#"
    },
    image: "/projects/dobu-martial.jpg",
    features: [
      "Responsive Design",
      "Class Scheduling System",
      "Program Information",
      "Interactive Navigation",
      "Contact Form Integration"
    ]
  },
  {
    title: "Math Mania Quiz App",
    description: "An interactive Android application designed to help users practice mathematics through engaging quizzes with multiple difficulty levels, real-time scoring, and immediate feedback.",
    tech: ["Java", "Android SDK", "Material Design"],
    links: {
      github: "https://github.com/Aungkyaw0/MathMania.git",
      live: "#"
    },
    image: "/projects/math-mania.jpg",
    features: [
      "Multiple Difficulty Levels",
      "Interactive Quiz Interface",
      "Real-time Score Tracking",
      "Progress Assessment",
      "Sound Effects"
    ]
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors"></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-stone-100">{project.title}</h3>
              <p className="text-light/80 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-highlight">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-light/80">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-highlight/10 text-highlight"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-highlight/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
                {project.links.live !== "#" && (
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:text-highlight/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 