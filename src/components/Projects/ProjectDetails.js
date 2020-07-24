import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = ({ project, auth }) => {
  //   console.log(project)
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div>
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">
                <strong>{project.title}</strong>
              </span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-3 grey-text">
              <div>
                Created by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>At {moment(project.createdAt.toDate()).calendar()} </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <h3>projects loading...</h3>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
