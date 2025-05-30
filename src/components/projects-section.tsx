"use client"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  imageUrls: string[]
  tags: string[]
  link: string
}

interface ProjectsSectionProps {
  projects?: Project[]
}

export default function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: number }>({})

  const selectImage = (projectId: number, imageIndex: number) => {
    setSelectedImages((prev) => ({ ...prev, [projectId]: imageIndex }))
  }

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const currentImageIndex = selectedImages[project.id] || 0
            const currentImage = project.imageUrls[currentImageIndex] || "/placeholder.svg"

            return (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Main Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={currentImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Image counter */}
                  {project.imageUrls.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      {currentImageIndex + 1} / {project.imageUrls.length}
                    </div>
                  )}
                </div>

                {/* Image Thumbnails */}
                {project.imageUrls.length > 1 && (
                  <div className="px-4 py-2 bg-gray-50 border-b">
                    <div className="flex gap-2 overflow-x-auto">
                      {project.imageUrls.map((url, index) => (
                        <button
                          key={index}
                          onClick={() => selectImage(project.id, index)}
                          className={`flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden transition-all duration-200 ${currentImageIndex === index
                            ? "border-gray-800 ring-2 ring-gray-300"
                            : "border-gray-200 hover:border-gray-400"
                            }`}
                        >
                          <img
                            src={url || "/placeholder.svg"}
                            alt={`${project.title} preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-5">{project.description}</p>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Updated projects data
const defaultProjects: Project[] = [
    {
    id: 1,
    title: "VeggieLens - Telegram Bot",
    description:
      "[In Progress 🛠️] VeggieLens is a Telegram Bot that helps vegetarians and vegans find nearby restaurants, scan product barcodes for ingredient insights, and chat with an AI for plant-based tips. It features an interactive map, AI chatbot, and serverless architecture hosted on AWS Lambda.",
    imageUrls: [
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748625939/Screenshot_2025-05-31_012331_zx97wp.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748625941/Screenshot_2025-05-31_012416_ij3wed.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748626073/Screenshot_2025-05-31_012736_ecsenu.png"
    ],
    tags: ["Node.js", "AWS Lambda", "Telegram Bot API", "Google Places API", "LeafletJS", "Vercel"],
    link: "https://t.me/Herbivore_Bot",
  },
  {
    id: 2,
    title: "Sustainable Object Detection",
    description:
      "A web-based and camera-based system that detects recyclable objects using MediaPipe Vision. Built during a hackathon (TryHack) organized by SEED at Singapore Polytechnic.",
    imageUrls: [
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748595625/Screenshot_2025-05-30_165955_jujrnn.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748595798/WhatsApp_Image_2024-10-16_at_19.28.05_e76eed30_ijcj8p.jpg",
    ],
    tags: ["JavaScript", "MediaPipe", "HTML", "CSS", "Computer Vision"],
    link: "https://seedhackathon.vercel.app/",
  },
  {
    id: 3,
    title: "Graphical & Standard Calculator App",
    description: "A mobile calculator built with React Native and Expo. Includes a standard calculator for basic arithmetic and a graphical calculator that plots mathematical expressions using Plotta.js.",
    imageUrls: ["https://res.cloudinary.com/dycbfyja1/image/upload/v1748596836/Screenshot_2025-05-30_170906_xsxurj.png"],
    tags: ["React Native", "Expo", "JavaScript", "Plotta.js", "Graphing"],
    link: "https://expo.dev/preview/update?message=Graphing%20Feature&updateRuntimeVersion=1.0.0&createdAt=2024-08-29T16%3A25%3A09.680Z&slug=exp&projectId=f0bc4007-29d8-47f2-973c-fa5c885f4492&group=3cc05160-5e3c-4864-a95e-9ffc556825c3",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "Track and visualize your personal finances with this Streamlit web app. Features include secure Google login, transaction history, and interactive data visualizations.",
    imageUrls: [
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597123/Screenshot_2025-05-30_172440_opvo4b.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597124/Screenshot_2025-05-30_172453_azohle.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597131/Screenshot_2025-05-30_172502_icnvpg.png"
    ],
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Firebase", "Data Visualization", "OAuth"],
    link: "https://finance-tracker-yj.streamlit.app/"
  },
  {
    id: 5,
    title: "QR Code Generator",
    description: "A simple and lightweight web app to generate QR codes from text or URLs using vanilla HTML, CSS, and JavaScript. Built with no frameworks or build tools — just static files.",
    imageUrls: [
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597409/Screenshot_2025-05-30_172945_gzm5hc.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597410/Screenshot_2025-05-30_172956_gz9mij.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "QRCode.js", "CDN"],
    link: "https://qr-code-generator-henna-two.vercel.app/"
  },
  {
    id: 6,
    title: "Classic Snake Game",
    description: "A JavaScript and Canvas-based Snake game with smooth controls, score tracking, and start/game over screens.",
    imageUrls: [
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597969/Screenshot_2025-05-30_173824_gef3xv.png",
      "https://res.cloudinary.com/dycbfyja1/image/upload/v1748597974/Screenshot_2025-05-30_173907_tthvnv.png"
    ],
    tags: ["JavaScript", "Canvas", "Game Development"],
    link: "https://snake-game-xi-livid.vercel.app/"
  }
]
