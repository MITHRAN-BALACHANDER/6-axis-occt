"use client"
import"./button.css"
import { useState } from "react"
export default function Start() {
    const [count, setCount] = useState(0)
  
    return (
        <button
        class="button"
    >
        Start

      </button>
    )
  }
