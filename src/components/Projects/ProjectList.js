import React from 'react'
import ProjectSummery from './ProjectSummery'
import {Link} from 'react-router-dom'


const ProjectList =({projects})=> {
    
    return (
        <div className='project-list'>
          {projects && projects.map(project =>{
             
              return(
                 <Link className='eh' to ={'/project/' + project.id} key={project.id}> <ProjectSummery  project={project} /></Link>
              )
          })}
        </div>
      
    )
}

export default ProjectList