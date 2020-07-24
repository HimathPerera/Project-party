import React from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut } from '../../store/actions/authAction'

const SignedInLinks = ({logout , initials}) => {
    return (
        <ul className="right">
            <li><NavLink to='/createProject'>New Project</NavLink></li>
            <li><NavLink to='#'onClick={logout}>Logout</NavLink></li>
    <li><NavLink to='/' className="btn btn-floating pink lighten-1 z-depth-0">{initials}</NavLink></li>
        </ul>
    )
}
const mapStateToProps  = (state) =>{
    // console.log(state.firebase.profile.initials)
    return{
      initials : state.firebase.profile.initials
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        logout : () =>dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)