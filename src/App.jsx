import './App.css'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 min-h-40 rounded-lg shadow text-xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow">
          card 1
        </div>

        <div className="bg-white p-6 min-h-40 rounded-lg shadow text-xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow">
          card 2
        </div>

        <div className="bg-white p-6 min-h-40 rounded-lg shadow text-xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow">
          card 3
        </div>

        <div className="bg-white p-6 min-h-40 rounded-lg shadow text-xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow">
          card 4
        </div>

        <div className="bg-white p-6 min-h-40 rounded-lg shadow text-xl flex justify-center items-center hover:scale-105 duration-300 hover:border hover:bg-gray-200 hover:shadow-lg transition-shadow">
          card 5
        </div>
      </div>
    </div>
  )
}

export default App