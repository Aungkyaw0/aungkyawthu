const education = [
  {
    title: "Higher National Diploma in Computing (Application Development & Testing)",
    institution: "Pearson BTEC Level 4 + Level 5",
    period: "2024 - Present",
    description: [
      "Developing interactive full-stack web applications and enterprise solutions",
      "Creating high-fidelity prototypes, wireframes, and conducting risk analysis",
      "Implementing projects using low-code/no-code platforms and Agile methodologies",
      "Learning system analysis, design patterns, and Generative AI integration",
      "Working with Java-based console applications and modern web technologies"
    ]
  },
  {
    title: "International Level 3 Foundation Diploma in IT",
    institution: "Pearson BTEC Level 3",
    period: "2022 - 2023",
    description: [
      "Developed various Java-based console applications",
      "Created static and dynamic websites using modern web technologies",
      "Studied software development methodologies and lifecycles",
      "Learned fundamental IT concepts and web development basics",
      "Gained hands-on experience with database management systems"
    ]
  },
  {
    title: "High School Diploma",
    institution: "Basic Education High School",
    period: "Graduated 2019",
    description: [
      "Completed secondary education with focus on science and mathematics",
      "Developed strong analytical and problem-solving skills",
      "Participated in various academic competitions and projects"
    ]
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 
                     before:top-0 before:bottom-0 before:w-[2px] before:bg-highlight"
          >
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-highlight"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-stone-100">{edu.title}</h3>
              <div className="text-highlight">{edu.institution}</div>
              <div className="text-sm text-light/80">{edu.period}</div>
              <ul className="list-disc list-inside space-y-1 text-light/90">
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education 