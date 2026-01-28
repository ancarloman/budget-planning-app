import { Cat, Flower2, CloudMoon } from 'lucide-react'

function TopBar() {
  return (
    <div className="min-h-[64px] w-full flex items-center bg-base-100 border-b border-base-300">
      <div className="flex-1" />

      <div className="flex items-center space-x-6">
        {/* Theme selector */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Cat size={22} />
          </div>

          <ul className="menu dropdown-content bg-base-200 rounded-box shadow p-3 w-44">
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">
              <Cat size={16}/> Cat
            </button></li>
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">
              <Flower2 size={16}/> Daisy
            </button></li>
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">
              <CloudMoon size={16}/> NightSky
            </button></li>
          </ul>
        </div>

        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle p-0 avatar">
            <div className="w-10 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul className="menu dropdown-content bg-base-200 rounded-box shadow w-52 p-2">
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">Profile</button></li>
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">Settings</button></li>
            <li><button className="btn btn-md btn-ghost justify-start gap-2 w-full">Logout</button></li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default TopBar;
