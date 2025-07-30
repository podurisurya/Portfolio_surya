import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
// import CertificatePage from './pages/CertificatePage';
// import SkillsCard from './components/SkillsCard'
import SkillCards from './components/SkillsCard';


// Main App Component
const App = () => {
  // State to manage active navigation link (optional, for visual feedback)
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Effect to update active section based on scroll position (optional)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'achievements', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Tailwind CSS CDN and Google Fonts are handled in public/index.html */}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-2xl font-bold text-indigo-600 rounded-md p-1">
            Venkata Surya Lakshmi Poduri
          </div>
          <div className="flex space-x-4 md:space-x-8 text-lg">
            <NavItem id="home" label="Home" active={activeSection === 'home'} onClick={scrollToSection} />
            <NavItem id="about" label="About" active={activeSection === 'about'} onClick={scrollToSection} />
            <NavItem id="skills" label="Skills" active={activeSection === 'skills'} onClick={scrollToSection} />
            <NavItem id="experience" label="Experience" active={activeSection === 'experience'} onClick={scrollToSection} />
            <NavItem id="projects" label="Projects" active={activeSection === 'projects'} onClick={scrollToSection} />
            <NavItem id="education" label="Education" active={activeSection === 'education'} onClick={scrollToSection} />
            <NavItem id="certifications" label="Certifications" active={activeSection === 'certifications'} onClick={scrollToSection} />
            <NavItem id="achievements" label="Achievements" active={activeSection === 'achievements'} onClick={scrollToSection} />
            <NavItem id="contact" label="Contact" active={activeSection === 'contact'} onClick={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 md:pt-24"> {/* Adjust padding-top to account for fixed nav */}

        {/* Home/Hero Section */}
        <section id="home" className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
              Hi, I'm <span className="text-yellow-300">Venkata Surya Lakshmi Poduri</span>!
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
              A passionate Computer Science student focused on building impactful and scalable software solutions.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in">
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/22pa1a12e5_poduriLakshmi.pdf" // IMPORTANT: Make sure this PDF is in your public folder
                download="Venkata_Surya_Lakshmi_Poduri_Resume.pdf"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 hover:border-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-2/3 mb-8 md:mb-0">
  {/* Placeholder for profile picture. Replace with your actual photo URL */}
  <img
    src="ProfileSurya.jpg"
    alt="Venkata Surya Lakshmi Poduri"
    className="w-[40%] h-[40%] md:w-80 md:h-80 rounded-full mx-auto object-cover shadow-lg border-4 border-indigo-200"
  />
</div>
              <div className="md:w-2/3 text-lg leading-relaxed text-gray-700">
                <p className="mb-4">
                  Hello! I'm Venkata Surya Lakshmi Poduri, a final-year B.Tech student passionate about developing scalable and data-driven solutions. With a strong foundation in Java development, I enjoy designing backend systems that are both efficient and maintainable.
                </p>
                <p className="mb-4">
                  My journey into tech began with a curiosity for how systems work, which evolved into a deep interest in software engineering and data engineering. I specialize in building robust server-side applications using Java and have hands-on experience with databases.
                </p>
                <p>
                  I'm also actively exploring the intersection of data engineering and cloud technologies, with growing skills in SQL,Beyond code, I enjoy participating in hackathons, workshops constantly pushing myself to learn and contribute to impactful projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard title="Languages" skills={["Java", "Python (Basics)", "HTML", "CSS", "SQL"]} />
              <SkillCard title="Frameworks/Libraries" skills={["Node.js", "Express.js", "React.js"]} />
              <SkillCard title="Databases" skills={["Snowflake", "MySQL", "MongoDB", "Firestore"]} />
              <SkillCard title="Tools" skills={["VS Code", "GitHub"]} />
              <SkillCard title="Core Concepts" skills={["Object-Oriented Programming (OOPS)", "Database Management Systems (DBMS)", "DSA (LinkedLists, Binary Trees, Graphs)"]} />
              <SkillCard title="Cloud" skills={["AWS Cloud (Certification)"]} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Experience</h2>
            <div className="space-y-10">
              <ExperienceCard
                title="Codeway Intern"
                company="Codeway"
                dates="Jan 2024 - Feb 2024"
                description={[
                  "Developed a Java-based student grade calculator with a 99% accuracy rate, enabling students to quickly assess academic performance and identify areas requiring focused improvement.",
                  "Collaborated on multiple mini-projects using Core Java, applying control structures, exception handling, and file I/O operations to build modular backend functionalities and reinforce foundational programming concepts.",
                  "Applied object-oriented programming principles to optimize Java modules, reducing runtime by 20% and enhancing system scalability."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ProjectCard
                title="Complaints Portal"
                description="Designed and deployed a full-stack complaints management platform to collect, store, and render user feedback. Enabled real-time likes and department-wise filtering, improving user experience by 35%. Prepared a backend system using Node.js and MongoDB, achieving a 40% improvement in response time for complaint submissions and updates. Enhanced database performance by implementing indexing in MongoDB, enabling real-time complaint tracking and reducing query execution time by 35%."
                technologies={["Node.js", "HTML", "CSS", "Express.js", "Firestore", "MongoDB"]}
                githubLink="https://github.com/podurisurya/ComplaintsPortal.git" // Using the provided repo link as a placeholder
                liveLink="#" // Placeholder, update if you have a live demo
              />
              <ProjectCard
                title="HematoVision Machine Learning"
                description="Developed a deep learning-based blood cell classification system using transfer learning on 12,000+ labeled images, enabling high-accuracy predictions for clinical, remote, and educational applications."
                technologies={["Machine Learning", "Deep Learning", "Transfer Learning", "Python"]}
                githubLink="https://github.com/podurisurya/HematoVision11.git" // Placeholder, update if you have a repo
                liveLink="#" // Placeholder, update if you have a live demo
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Education</h2>
            <div className="space-y-8">
              <ExperienceCard
                title="Bachelor of Technology in Information Technology"
                company="Vishnu Institute Of Technology"
                dates="May 2022 - 2026"
                description={[
                  "CGPA: 9.49/10.00",
                  "Minor: Artificial Intelligence and Data Science",
                  "Location: Bhimavaram, Andhra Pradesh"
                ]}
              />
              <ExperienceCard
                title="Intermediate (MPC)"
                company="Aditya Junior College"
                dates="May 2020 - 2022"
                description={[
                  "Percentage: 96.9%",
                  "Location: Palakollu, Andhra Pradesh"
                ]}
              />
            </div>
          </div>
        </section>
                {/* <CertificatePage/>
                <SkillsCard/> */}

        {/* Certifications Section */}
        <section id="certifications" className="py-16 px-4 bg-gray-100">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCards 
        title="Programming Certifications" 
        skills={["Java Programming - Codeway", "DSA with Java - GeeksforGeeks"]} 
        buttonText="View Certificates"
        buttonLink="https://drive.google.com/file/d/1D9fr48izweMyOUHPBeVqeBSmDda0LWMv/view?usp=sharing"
      />
      <SkillCards 
        title="Web & Database Certifications" 
        skills={["MongoDB for Developers - GeeksforGeeks", "Web Development - IBM via edX"]} 
        buttonText="View Certificates"
        buttonLink="https://drive.google.com/file/d/1W4dBBVk0BSjiST3dSqs6ezC64WiqpHiJ/view?usp=sharing"
      />
      <SkillCards 
        title="Cloud Certifications" 
        skills={["AWS Cloud Certification - Kyndryl","Agentforce Specialist-Salesforce"]} 
        buttonText="View Certificates"
        buttonLink="https://drive.google.com/file/d/1jXewlr0J_ZC6Koq5VzsHXaezUnFydMkm/view?usp=sharing"
      />
    </div>
  </div>
</section>

        {/* Achievements / Activities Section */}
        <section id="achievements" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Achievements & Activities</h2>
            <div className="space-y-8">
              <ExperienceCard
                title="Achievements"
                company=""
                dates=""
                description={[
                  "Ranked in the top 5% of the department at Vishnu Institute of Technology with a CGPA of 9.49.",
                  "Finalist out of 500+ teams in IOT Workshop.",
                  "Participated in Flipkart Girls Wanna Code 6.0, gaining exposure to real-world product challenges and collaborative software development.",
                  "One of the participant in GDSC Hackathon."
                ]}
              />
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-indigo-700 mb-12">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center space-y-6">
              <p className="text-xl">
                Email: <a href="mailto:22pa1a12e5@vishnu.edu.in" className="text-indigo-600 hover:underline">22pa1a12e5@vishnu.edu.in</a>
              </p>
              <p className="text-xl">
                Phone: <a href="tel:+919494914574" className="text-indigo-600 hover:underline">+91 94949 14574</a>
              </p>
              <p className="text-xl">
                LinkedIn: <a href="https://www.linkedin.com/in/surya-lakshmi-poduri-b76274276" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/surya-lakshmi-poduri</a>
              </p>
              <p className="text-xl">
                GitHub: <a href="https://github.com/podurisurya" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/podurisurya</a>
              </p>
              <p className="text-xl">
                LeetCode: <a href="https://leetcode.com/u/suryalakshmi99/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">leetcode.com/u/suryalakshmi99/</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <div className="container mx-auto text-sm">
          <p>&copy; {new Date().getFullYear()} Venkata Surya Lakshmi Poduri. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com/in/surya-lakshmi-poduri" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">LinkedIn</a>
            <a href="https://github.com/podurisurya" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">GitHub</a>
            <a href="https://leetcode.com/u/suryalakshmi99/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components for better organization

const NavItem = ({ id, label, active, onClick }) => (
  <a
    href={`${id}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(id);
    }}
    className={`px-3 py-2 rounded-md transition duration-300 ${
      active ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
    }`}
  >
    {label}
  </a>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, company, dates, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    <p className="text-indigo-600 text-lg mb-2">{company} | {dates}</p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700 mb-4 flex-grow">{description}</p>
    <div className="mb-4">
      <span className="font-semibold text-indigo-700">Technologies: </span>
      <span className="text-gray-600">{technologies.join(', ')}</span>
    </div>
    <div className="flex space-x-4 mt-auto">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.68-.233.68-.522 0-.257-.01-1.04-.015-1.912-2.782.603-3.37-1.34-3.37-1.34-.454-1.15-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.34 1.087 2.905.833.09-.645.35-1.087.636-1.338-2.22-.253-4.555-1.115-4.555-4.93 0-1.09.39-1.984 1.03-2.68-.104-.253-.448-1.27.098-2.65 0 0 .84-.27 2.75 1.025.79-.222 1.63-.333 2.47-.336.84.003 1.68.114 2.47.336 1.908-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.397.098 2.65.64.696 1.028 1.59 1.028 2.68 0 3.824-2.338 4.673-4.564 4.92-.359.31-.67.73-.67 1.472 0 1.064.01 1.925.01 2.183 0 .29-.21.614-.69.522C19.135 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      )}
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/>
          </svg>
          Live Demo
        </a>
      )}
    </div>
  </div>
);

// Render the App component into the 'root' element
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
