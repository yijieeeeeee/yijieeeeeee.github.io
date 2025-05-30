interface Skill {
    name: string
    level: number // 1-5 scale
}

interface SkillCategory {
    title: string
    skills: Skill[]
}

interface Experience {
    id: number
    title: string
    company: string
    period: string
    description: string[]
    technologies: string[]
}

interface Education {
    id: number
    degree: string
    school: string
    period: string
    description?: string
}

interface AboutSectionProps {
    bio?: string
    skillCategories?: SkillCategory[]
    experiences?: Experience[]
    education?: Education[]
}

export default function AboutSection({
    bio = defaultBio,
    skillCategories = defaultSkillCategories,
    experiences = defaultExperiences,
    education = defaultEducation,
}: AboutSectionProps) {
    const renderSkillLevel = (level: number) => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                    <div key={dot} className={`w-2 h-2 rounded-full ${dot <= level ? "bg-gray-800" : "bg-gray-300"}`} />
                ))}
            </div>
        )
    }

    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

                {/* Bio Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <img
                                src="https://res.cloudinary.com/dycbfyja1/image/upload/v1748629039/meeee_olrxai.jpg?height=300&width=300"
                                alt="Profile"
                                className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-lg text-gray-700 leading-relaxed">{bio}</p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex justify-between items-center">
                                            <span className="text-gray-700">{skill.name}</span>
                                            {renderSkillLevel(skill.level)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Work Experience</h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Main timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="relative flex items-start mb-8 last:mb-0">
                                    {/* Timeline dot */}
                                    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div className="ml-6 flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
                                            </div>
                                            <div className="mt-2 lg:mt-0 lg:ml-4">
                                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                                                    <svg
                                                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-200 font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
                    <div className="max-w-4xl mx-auto">
                        {education.map((edu) => (
                            <div key={edu.id} className="bg-gray-50 p-6 rounded-lg mb-4">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div>
                                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                        <p className="text-gray-600 font-medium">{edu.school}</p>
                                        {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
                                    </div>
                                    <span className="text-gray-500 text-sm mt-1 md:mt-0">{edu.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Data
const defaultBio = `I first got interested in tech during primary school through Scratch, and later in secondary school using Micro:bit. Those early experiences sparked a curiosity that eventually led me to pursue Information Technology at Singapore Polytechnic.

Now in my final year, I'm exploring full-stack development through hands-on projects — both in and outside of school. I enjoy building practical solutions, learning new tools as I go, and seeing my code come to life.

Outside of coding, I watch funny (and occasionally educational) coding videos on YouTube, and I make time for the gym to stay balanced. I'm still learning, still growing — just trying to get better every day.`


const defaultSkillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", level: 4 },
            { name: "CSS", level: 3 },
            { name: "React", level: 3 },
            { name: "React Native", level: 2 },
            { name: "JavaScript", level: 4 },
            { name: "Tailwind CSS", level: 3 },
            { name: "Bootstrap", level: 3 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 4 },
            { name: "Express.js", level: 4 },
            { name: "RESTful APIs", level: 4 },
            { name: "Java", level: 3 },
            { name: "PostgreSQL", level: 4 },
            { name: "MySQL", level: 4 },
            { name: "Prisma", level: 4 },
            { name: "MongoDB", level: 2 },
        ],
    },
    {
        title: "Testing & QA",
        skills: [
            { name: "Jest", level: 3 },
            { name: "Playwright", level: 3 },
            { name: "Postman", level: 3 },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", level: 3 },
            { name: "GitHub", level: 3 },
            { name: "Docker", level: 2 },
            { name: "AWS", level: 2 },
        ],
    },
    {
        title: "Design & UX",
        skills: [
            { name: "Figma", level: 3 },
        ],
    },
]

const defaultExperiences: Experience[] = [
    {
        id: 1,
        title: "Project Industry Now Curriculum (INC)",
        company: "Singapore Polytechnic",
        period: "2023 - Present",
        description: [
            "Contributed to AuthINC, an authentication and authorization SaaS project, focusing on secure user access and role management.",
            "Currently involved in developing an enterprise resource planning (ERP) system for Cleo Spa.",
            "Applied user journey mapping, use case descriptions, and Agile methodologies to support project delivery."
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Agile"],
    },
    {
        id: 2,
        title: "Warehouse Assistant (Quality Assurance)",
        company: "Venture Corporation Limited",
        period: "Feb 2023 - Apr 2023",
        description: [
            "Conducted detailed quality inspections on incoming and outgoing shipments to ensure compliance with standards.",
            "Investigated and reported inventory defects and discrepancies.",
            "Adhered to safety protocols to maintain a safe working environment.",
            "Communicated effectively in Mandarin and English with foreign staff to ensure understanding of procedures."
        ],
        technologies: ["Quality Inspection", "Process Audits", "Team Collaboration"]
    },
    {
        id: 3,
        title: "Warehouse Assistant (Incoming Department)",
        company: "Bolloré Logistics",
        period: "Dec 2022 - Jan 2023",
        description: [
            "Supported inventory management by categorizing incoming products.",
            "Performed quality checks to ensure accuracy of shipments.",
            "Collaborated with team members for smooth daily warehouse operations.",
            "Observed automated picking machinery and its impact on efficiency.",
            "Facilitated communication using Mandarin to coordinate with foreign staff."
        ],
        technologies: ["Inventory Management", "Quality Checks", "Teamwork"]
    },
]

const defaultEducation: Education[] = [
    {
        id: 1,
        degree: "Diploma in Information Technology (Software Development specialization)",
        school: "Singapore Polytechnic",
        period: "Apr 2023 - Mar 2026 (Expected)",
        description: `Pursuing a Diploma in Information Technology with a specialization in Software Development at Singapore Polytechnic. 
Also working towards a Certificate in Advanced Mathematics to deepen mathematical understanding and analytical skills.
Participating in the Project INC pathway to gain hands-on experience working on real-world IT projects, applying and expanding technical knowledge.
Activities and Societies: Singapore Polytechnic InfoComm Club (SPIC), Singapore Polytechnic Ambassadors (SPA), Singapore Polytechnic Life Arts (SPLA).`,
    },
    {
        id: 2,
        degree: "GCE O-Level",
        school: "Jurong Secondary School",
        period: "Jan 2019 - Dec 2022",
        description: `Completed secondary education with a strong foundation in academics and teamwork through extracurriculars.
Achievements:
- NYAA Silver Level: National Youth Achievement Award Silver level, recognizing commitment to personal and community development.
- Edusave Awards (2021, 2022): For good conduct and active participation.
- Alumni Book Prize (Humanities): For distinctions in Combined Humanities and Principles of Accounts (POA) in 2021.
- Represented school in National School Games (NSG) Floorball Championships B Division in 2022.
Activities and Societies: Floorball team, Class Environmental Representative.`,
    },
];

