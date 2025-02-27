"use client"
import"./button.css"
import { useState } from "react"
export default function Simulate() {
    const [count, setCount] = useState(0)
  
    return (
        <button
        class="button"
    >
        Simulate

      </button>
    )
  }
