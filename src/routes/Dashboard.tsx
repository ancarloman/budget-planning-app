import { Repeat } from 'lucide-react'

function Dashboard() {
  return (
    <div className="h-full p-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
        
        {/* Main balance card (2/3 width) */}
        <div className="xl:col-span-2 bg-base-100 rounded-xl shadow p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold">0.00</span>
            <Repeat size={26} className="opacity-70" />
          </div>

          <div className="flex gap-3">
            <button className="btn btn-sm btn-outline">Add Fund</button>
            <button className="btn btn-sm btn-outline">Manual Deduction</button>
          </div>
        </div>

        {/* Right column placeholder (future widgets) */}
        <div className="bg-base-100 rounded-xl shadow p-6 flex items-center justify-center text-sm opacity-60">
          Future Widgets
        </div>
      </div>
    </div>
  )
}

export default Dashboard
