import React from 'react'
import moment from 'moment'

const ProjectSummery =({project})=> {
    return (
        <div className="card z-depth-1 project-summery">
        <div className="card-content gret-text text-darken-3">
    <span className="card-title"><strong>{project.title}</strong></span>
    <p><span className="grey-text">posted by </span>{project.authorFirstName} {project.authorLastName}</p>
    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
        </div>
    )
}
export default ProjectSummery