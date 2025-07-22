
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2021 - 2025",
      gpa: "3.8/4.0",
      description: "Major in Computer Science with focus on Software Engineering and AI/ML. Active member of the Computer Science Society.",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Best Project Award for Senior Capstone",
        "Teaching Assistant for Data Structures course"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Metropolitan High School",
      duration: "2017 - 2021",
      gpa: "3.9/4.0",
      description: "Valedictorian, President of Math Club, Captain of Programming Team",
      achievements: [
        "Valedictorian - Graduated with highest honors",
        "National Merit Scholar",
        "State Programming Competition - 1st Place"
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "React Developer Certification",
    "Python Programming Certificate"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <div className="flex items-center text-purple-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                      </div>
                      
                      <p className="text-purple-300 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold flex items-center">
                          <Award className="h-4 w-4 mr-2 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2 text-yellow-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-3 text-white transition-all duration-300 hover:from-purple-600/30 hover:to-pink-600/30 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Academic Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Current GPA</span>
                  <span className="text-green-400 font-bold">3.8/4.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Credits Completed</span>
                  <span className="text-purple-400 font-bold">120/128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Expected Graduation</span>
                  <span className="text-pink-400 font-bold">May 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
