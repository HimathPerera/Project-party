import React,{ Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/dashBoard';
import ProjectDetails from './components/Projects/ProjectDetails';
import SignedIn from './components/auth/SignedIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/Projects/CreateProject';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path ='/' component={DashBoard}/>
       <Route path='/project/:id' component={ProjectDetails}/>
       <Route path='/signin' component={SignedIn}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/createProject' component={CreateProject}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
