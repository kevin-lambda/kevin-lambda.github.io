import React from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage, AllProjectsPage } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<AllProjectsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
