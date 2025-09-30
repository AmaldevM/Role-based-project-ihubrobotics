import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-white p-6 text-center">
        Tailwind is working ✅
      </div>
    </>
  );
}

export default App
