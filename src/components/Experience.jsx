const experiences = [
  {
    title: "Sr. Frontend Developer",
    company: "Tech Company",
    period: "Jan 2021 - Present",
    description: [
      "Led the development of multiple high-impact web applications",
      "Implemented responsive designs and improved performance metrics by 40%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "Mar 2019 - Dec 2020",
    description: [
      "Developed and maintained client websites using React and Laravel",
      "Implemented CI/CD pipelines and automated deployment processes",
      "Collaborated with design team to implement pixel-perfect interfaces"
    ]
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "Jun 2018 - Feb 2019",
    description: [
      "Built and maintained responsive websites",
      "Worked with senior developers to manage large-scale projects",
      "Participated in daily stand-ups and sprint planning meetings"
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 
                     before:top-0 before:bottom-0 before:w-[2px] before:bg-highlight"
          >
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-highlight"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="text-highlight">{exp.company}</div>
              <div className="text-sm text-light/80">{exp.period}</div>
              <ul className="list-disc list-inside space-y-1 text-light/90">
                {exp.description.map((item, i) => (
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

export default Experience 