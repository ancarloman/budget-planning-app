// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/about')({
//   component: About,
// })

// function About() {
//   return <h1>ℹ️ About Page</h1>
// }

function About() {
  return (
    <div className="drawer h-screen">
      {/* Drawer toggle input */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Drawer content */}
      <div className="drawer-content flex flex-col p-4">
        <label htmlFor="my-drawer" className="btn btn-primary mb-4 lg:hidden">
          Open Sidebar
        </label>
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p>Here’s your portfolio page content.</p>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default About;

