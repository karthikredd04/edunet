
const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "HTML/CSS",
    "Git", "MongoDB", "PostgreSQL", "AWS", "Docker", "Figma"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student with a love for creating innovative solutions 
              and beautiful user experiences. With a strong foundation in both frontend and backend 
              technologies, I enjoy tackling complex problems and turning ideas into reality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep passion for 
              software development, UI/UX design, and emerging technologies. I'm always eager to 
              learn new technologies and collaborate on exciting projects.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="text-purple-400 font-semibold">Interests:</span>
              <span className="text-gray-300">Web Development, AI/ML, Mobile Apps, Open Source</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-3 py-2 text-center text-white font-medium transition-all duration-300 hover:from-purple-600/30 hover:to-pink-600/30 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
