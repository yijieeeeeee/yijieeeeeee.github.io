import type React from "react"

interface SocialLink {
  id: number
  name: string
  url: string
  icon: React.ReactNode
  tooltip: string
}

interface SocialLinksProps {
  links?: SocialLink[]
  className?: string
}

export default function SocialLinks({ links = defaultLinks, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {links.map((link) => (
        <div key={link.id} className="relative group">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer" // Ensures security by preventing the new page from accessing the original page
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 block p-2 rounded-lg hover:bg-gray-100"
            aria-label={link.name}
          >
            {link.icon}
          </a>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            {link.tooltip}
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// SVG icons for social media
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const SchoolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const GmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

// Updated social links data with tooltips and different icon for school
const defaultLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub Personal",
    url: "https://github.com/Punbelievable",
    icon: <GithubIcon />,
    tooltip: "Personal Projects",
  },
  {
    id: 2,
    name: "GitHub School",
    url: "https://github.com/YiJie-ProjectINC",
    icon: <SchoolIcon />,
    tooltip: "School Projects",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tan-yijie/",
    icon: <LinkedInIcon />,
    tooltip: "Professional Profile",
  },
  {
    id: 4,
    name: "Gmail",
    url: "mailto:yijieschool@gmail.com",
    icon: <GmailIcon />,
    tooltip: "Send me an email",
  },
]
