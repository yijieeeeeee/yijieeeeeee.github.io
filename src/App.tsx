import ProjectsSection from "./components/projects-section"
import SocialLinks from "./components/social-links"

function App() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">TAN YIJIE</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi, I'm YiJie</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm a full-stack developer passionate about creating beautiful and functional web applications.
          </p>
          <SocialLinks className="justify-center" />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Tan YiJie. All rights reserved.</p>
            <SocialLinks className="mt-4 md:mt-0" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App