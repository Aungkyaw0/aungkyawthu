const skills = [
    { name: "HTML5", icon: "html.svg" },
    { name: "CSS3", icon: "css3.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "VS Code", icon: "vscode.svg" },
    { name: "Cursor", icon: "cursor.png" },
    { name: "Figma", icon: "figma.svg" },

//   { name: "Node.js", icon: "nodejs.svg" },

]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-white">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-lg bg-navy hover:bg-navy/70 
                     transform hover:scale-105 transition-all duration-300"
          >
            <img 
              src={`/icons/${skill.icon}`} 
              alt={skill.name}
              className="w-12 h-12 mb-2 skill-icon"
            />
            <span className="text-sm text-light/80">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 