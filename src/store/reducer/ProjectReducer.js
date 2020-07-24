const initState = {
    projects :[
        {id:1,title :'help me to make it possible', content:'blah blah blaaaaaaah'},
        {id:2,title :'kiss me till i die', content:'blah blah blaaaaaaah'},
        {id:3,title : 'yeah! its possible', content:'blah blah blaaaaaaah'}
    ]
}


const projectReducer =(state =initState,action) => {
switch(action.type){
    case 'CREATE_PROJECT' :console.log ('created',action.project)
        return state;
    case 'CREATE_PROJECT_ERROR ' :console.log('create proj error',action.err)
        return state;
    default:
        return state
}

}
 
export default projectReducer