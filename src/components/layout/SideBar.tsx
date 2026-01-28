function SideBar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
        <ul className="menu w-full">
          <li><a className="active">Home</a></li>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>:K</a></li>
        </ul>
      </aside>

      {/* Main content */}
      {/* <main className="flex-1 p-6 bg-base-100">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p>This is your main page content.</p>
      </main> */}
    </div>
  )
}

export default SideBar;