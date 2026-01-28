function SideBar() {
  return (
    <> 
        <aside className="w-[15%] min-w-[120px] max-w-[280px] bg-base-200 flex flex-col border-r border-base-300 overflow-hidden p-4">
            <h1 className="text-sm sm:text-base md:text-xl text-center font-semibold italic mb-4">
                Portfolio
            </h1>

            <ul className="flex flex-col flex-1 justify-start gap-2 mr-2 p-0 ml-[-40px] w-full list-none">
                <li className="w-full"><button className="btn w-full">Project 1</button></li>
                <li className="w-full"><button className="btn w-full">Project 2</button></li>
                <li className="w-full"><button className="btn w-full">Project 3</button></li>
            </ul>

        </aside>
    </>
    
  )
}

export default SideBar;
