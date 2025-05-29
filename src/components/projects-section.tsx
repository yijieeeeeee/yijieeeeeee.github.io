interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link: string
}

interface ProjectsSectionProps {
  projects?: Project[]
}

export default function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Placeholder projects data
const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication and payment processing.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my skills and projects.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Firebase", "Redux"],
    link: "#",
  },
]
