import React from 'react'
import '../Projects/Projects.css'
import p1 from '../../images/Projects/p1.jpg'
import p2 from '../../images/Projects/p2.jpg'
import p3 from '../../images/Projects/p3.jpg'

const Projects = () => {
  return(
    <div className="project_main" id="Projects">
    <div className="container">
    <div className='title_heading'>  
        <h1>Projects</h1>
    </div>
    <div className="card-section">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-1 ">
    <div className="col-md-6 project_img">
      <img src={p1} className="img-fluid  " alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Web Chat Application</h5>
        <p className="card-text">This is a real time chat application in which we can communicate using text, voice or supporting attachment media.</p>
        <p className="card-text"><a href="https://chat-app-5ed3c.web.app" target="_blank" class="btn btn-primary">View Project</a></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="card-section">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-1 ">
    <div className="col-md-6 project_img">
      <img src={p3} className="img-fluid  " alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Covid-19 Live Dashboard</h5>
        <p className="card-text">Live tracking of covid cases of India is shown in a tabular form which is being updated on daily bases.</p>
        <p className="card-text"><a href="https://theharshnigam.github.io/covid-19/" target="_blank" class="btn btn-primary">View Project</a></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="card-section">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-1 ">
    <div className="col-md-6 project_img">
      <img src={p2} className="img-fluid  " alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Tic-Tac-Toe Game</h5>
        <p className="card-text">In this game two players take turn in drawing either an ' O' or ' X' in one square of a grid consisting of nine squares. Winner will be the first who draw the symbol in continuous grid. </p>
        <p className="card-text"><a href="https://theharshnigam.github.io/tic-tac-toe/" target="_blank" class="btn btn-primary">View Project</a></p>
      </div>
    </div>
  </div>
</div>
</div>



    
    </div>
</div>
  )
}

export default Projects