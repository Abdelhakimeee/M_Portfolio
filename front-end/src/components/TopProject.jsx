import React from 'react'

function TopProject() {
    const projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"]
  return (
    <div>
        <p>TopProject</p>

        <div className="container py-5">
      <h2 className="text-center mb-4">Top 5 Projects</h2>
      <div className="row justify-content-center">
        {projects.map((proj, index) => (
          <div key={index} className="col-md-2 m-2 p-3 border rounded shadow-sm text-center">
            {proj}
          </div>
        ))}
      </div>
    </div>

        
    </div>

  )
}

export default TopProject