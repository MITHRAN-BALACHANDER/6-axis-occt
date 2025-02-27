"use client"
import"./button.css"


import { useState } from "react"

export default function Start() {
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="button"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      
    </div>
  )
}
