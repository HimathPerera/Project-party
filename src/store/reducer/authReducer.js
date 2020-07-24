const initState = {
    authErrorLogin : null,
    authErrorSignup : null
}

const authReducer =(state =initState,action) => {
    switch(action.type){
        case 'LOGIN_FAIL':
            return {
                ...state,
                authErrorLogin : 'login failed'
            }
            case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authErrorLogin : null
            }
            case 'SIGNED_OUT' :
                console.log('signed out')
                return state
            case 'NEW_USER_CREATED' :
                console.log('new user created')
                return {
                    ...state,
                    authErrorSignup : null
                }
            case 'SIGNIN_ERROR' :
                console.log('signup error')
                return{
                    ...state,
                    authErrorSignup : action.err.message 
                }
            default :
            return state
    }

}

export default authReducer


